#!/usr/bin/env python3
"""Seed Slack workspace with dummy messages for PoC."""
import json
import os
import sys
import time
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
env_path = os.path.join(ROOT, ".env.slack-poc")
env = {}
with open(env_path) as f:
    for line in f:
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        k, v = line.split("=", 1)
        env[k] = v

TOKEN = env["SLACK_BOT_TOKEN"]
API = "https://slack.com/api"


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


def get_channels() -> dict[str, str]:
    res = call("conversations.list?limit=200&types=public_channel")
    if not res.get("ok"):
        sys.exit(f"list error: {res}")
    return {c["name"]: c["id"] for c in res["channels"]}


SEEDS = {
    "営業": [
        "A社に提案書送付完了。来週返信予定",
        "B社商談、次回は見積提示フェーズへ",
        "C社の初回アポ獲得、来週火曜15時",
        "D社失注、理由は価格差。来期再提案",
        "今月の新規商談12件、進行中8件",
    ],
    "企画": [
        "新機能Xのワイヤーフレーム初稿完成",
        "ユーザーインタビュー3件実施、課題仮説を更新",
        "競合5社の機能比較表を作成、共有用リンクは後ほど",
        "来期ロードマップのドラフトを週内に共有します",
    ],
    "事務": [
        "請求書今月分、全件発行完了",
        "税理士から決算資料のレビュー返却",
        "新オフィスの契約書、先方社印待ち",
        "経費精算の締め切りを明日に延長します",
    ],
    "random": [
        "近所の新しいカレー屋が当たりでした",
        "桜が散り始めましたね",
        "連休どこか出かける予定ありますか",
    ],
}


def main() -> None:
    channels = get_channels()
    for name, messages in SEEDS.items():
        cid = channels.get(name)
        if not cid:
            print(f"SKIP #{name}: not found")
            continue
        join = call("conversations.join", {"channel": cid})
        if not join.get("ok") and join.get("error") != "already_in_channel":
            print(f"  join failed: {join}")
        print(f"→ #{name} ({cid})")
        for msg in messages:
            res = call("chat.postMessage", {"channel": cid, "text": msg})
            status = "ok" if res.get("ok") else f"ERR:{res.get('error')}"
            print(f"  [{status}] {msg}")
            time.sleep(0.3)
    print("done.")


if __name__ == "__main__":
    main()
