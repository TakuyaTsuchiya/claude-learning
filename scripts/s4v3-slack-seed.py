#!/usr/bin/env python3
"""S4-V3 複合MCP PoC: Slackワークスペースにスタートアップ.incの1週間メッセージを投入。

前提：.env.slack-poc に SLACK_BOT_TOKEN があり、
Claude-MCP-demo ワークスペースに #startup-* 6チャネルが作成済み。
Botは channels:join を持つのでpublicチャネルへの参加は自動。
"""
from __future__ import annotations
import json
import os
import sys
import time
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ENV_PATH = os.path.join(ROOT, ".env.slack-poc")
DATA_PATH = os.path.join(ROOT, "demos/startup-inc/data/slack-messages-week.json")
API = "https://slack.com/api"

env: dict[str, str] = {}
with open(ENV_PATH) as f:
    for line in f:
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        k, v = line.split("=", 1)
        env[k] = v
TOKEN = env["SLACK_BOT_TOKEN"]


def call(endpoint: str, data: dict | None = None) -> dict:
    url = f"{API}/{endpoint}"
    headers = {"Authorization": f"Bearer {TOKEN}"}
    if data is None:
        req = urllib.request.Request(url, headers=headers)
    else:
        body = json.dumps(data).encode("utf-8")
        headers["Content-Type"] = "application/json; charset=utf-8"
        req = urllib.request.Request(url, data=body, headers=headers, method="POST")
    with urllib.request.urlopen(req) as r:
        return json.loads(r.read())


def list_channels() -> dict[str, str]:
    channels: dict[str, str] = {}
    cursor = ""
    while True:
        ep = f"conversations.list?limit=200&types=public_channel&exclude_archived=true"
        if cursor:
            ep += f"&cursor={cursor}"
        res = call(ep)
        if not res.get("ok"):
            sys.exit(f"list error: {res}")
        for c in res["channels"]:
            channels[c["name"]] = c["id"]
        cursor = res.get("response_metadata", {}).get("next_cursor", "")
        if not cursor:
            break
    return channels


def main() -> None:
    with open(DATA_PATH, encoding="utf-8") as f:
        data = json.load(f)

    channels_map = list_channels()
    # JSON側は "#general" 形式、Slack側は "startup-general" 形式
    prefix = "startup-"

    for ch in data["channels"]:
        jname = ch["name"].lstrip("#")  # general, sales, ...
        sname = f"{prefix}{jname}"
        cid = channels_map.get(sname)
        if not cid:
            print(f"SKIP #{sname}: not found (作成されているか確認してください)")
            continue
        # Bot参加（既参加ならスキップ扱い）
        j = call("conversations.join", {"channel": cid})
        if not j.get("ok") and j.get("error") != "already_in_channel":
            print(f"  join warn: {j}")
        print(f"\n→ #{sname} ({cid}) — {len(ch['messages'])} messages")

        for msg in ch["messages"]:
            # 本文冒頭に発言者・日時を太字でマーク、LLMが集約で拾えるように
            body = f"*{msg['user']}* — {msg['day']} {msg['time']}\n{msg['text']}"
            r = call("chat.postMessage", {"channel": cid, "text": body})
            status = "ok" if r.get("ok") else f"ERR:{r.get('error')}"
            print(f"  [{status}] {msg['day']} {msg['time']} {msg['user']}")
            time.sleep(0.35)
    print("\ndone.")


if __name__ == "__main__":
    main()
