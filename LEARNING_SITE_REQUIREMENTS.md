# 📚 AI Contents Labo 学習サイト要件定義書

## 🎯 プロジェクト概要

### **サイト名**
「ChatGPT15分マスター → Vibeコーディング体験サイト」

### **目的**
1. ChatGPTの基本操作を15分で習得してもらう
2. 学習サイト自体がVibeコーディングで作られたことを示し、説得力を高める
3. 自然にVibeコーディングや有料コミュニティへ誘導する

### **ターゲットユーザー**
- **メイン**: AI未経験〜初心者（20-50代の会社員・主婦）
- **デバイス**: スマホメイン（70%）、PC（30%）
- **学習時間**: 隙間時間（通勤・昼休み等）

---

## 🌐 サイト構成

### **URL構造**
```
https://ai-contents-labo.com/
├── /learn/                    # 学習ポータル（新規作成）
├── /learn/chatgpt-master      # ChatGPT講座
├── /learn/site-creation       # サイト制作の秘密
├── /learn/vibecoding-demo     # Vibeコーディング体験
├── /learn/success-stories     # 受講生の声
└── /learn/next-steps          # 次のステップ案内
```

### **ページ構成詳細**

#### **🏠 /learn/ (学習ポータル)**
- **ヘッダー**: 進捗表示・ナビゲーション
- **メインビジュアル**: 学習の流れ説明
- **コース一覧**: 3つのメイン動画講座
- **進捗ダッシュボード**: どこまで完了したか
- **CTA**: 次に見るべき動画への誘導

#### **📱 /learn/chatgpt-master (ChatGPT15分マスター講座)**
- **動画プレイヤー**: 15分の解説動画
- **章分け**: 3分×5章に分割
- **実践エリア**: その場でChatGPTを試せるスペース
- **チェックリスト**: 学習項目の進捗確認
- **次のステップ**: サイト制作の秘密へ誘導

#### **🛠️ /learn/site-creation (サイト制作の秘密)**
- **インパクト動画**: 「実はこのサイト、プログラミング知識ゼロで...」
- **Before/After**: 従来開発 vs Vibeコーディング比較
- **制作過程**: 実際の画面録画
- **驚きポイント**: 開発時間・コストの比較
- **体験誘導**: Vibeコーディングデモへ

#### **🚀 /learn/vibecoding-demo (Vibeコーディング体験)**
- **ライブデモ**: 簡単なWebページを作る過程
- **対話例**: AIとのやり取り実例
- **完成品**: 実際に動くページの確認
- **可能性**: 「あなたにもできること」一覧
- **アクション**: 無料ウェビナー・コミュニティ参加

#### **👥 /learn/success-stories (受講生の声)**
- **成果事例**: 実際の受講生の体験談
- **Before/After**: 学習前後の変化
- **具体的成果**: 時間短縮・業務改善例
- **多様性**: 様々な職業・年代の事例

#### **📞 /learn/next-steps (次のステップ案内)**
- **選択肢提示**: 3つの進路
  - A) ChatGPT深堀り → ウェビナー参加
  - B) Vibeコーディング学習 → 専門講座
  - C) 総合学習 → コミュニティ参加
- **比較表**: 各選択肢の特徴・料金
- **限定特典**: 今だけの特別オファー

---

## 🎥 動画コンテンツ仕様

### **📱 動画1: ChatGPT15分マスター講座**

#### **技術仕様**
- **時間**: 15分（3分×5章）
- **解像度**: 1080p（スマホ対応）
- **字幕**: あり（通勤中でも視聴可能）
- **速度調整**: 0.5x, 1x, 1.25x, 1.5x

#### **構成詳細**
```
📖 第1章: はじめに (0:00-3:00)
- 自己紹介・講座の目的
- 15分で何ができるようになるか
- 事前準備（アプリダウンロード）

📱 第2章: ChatGPT登録・基本操作 (3:00-6:00)
- アカウント作成手順（スマホ画面録画）
- 基本画面の説明
- 最初の質問を送ってみる

💼 第3章: ビジネス活用実践 (6:00-9:00)
- メール作成の実演
- 資料の構成案作成
- スケジュール最適化

⚡ 第4章: 効率化テクニック (9:00-12:00)
- 音声入力の活用
- プロンプトのコツ
- よく使う機能の保存方法

🎯 第5章: まとめ・次のステップ (12:00-15:00)
- 学習内容の振り返り
- 明日から実践できること
- 「実は、このサイトも...」への導線
```

### **🛠️ 動画2: サイト制作の秘密 (12分)**

#### **構成**
```
😲 衝撃の告白 (0:00-2:00)
- 「実は告白があります...」
- このサイトの機能紹介
- 「プログラミング知識ゼロで作りました」

⚖️ 比較解説 (2:00-5:00)
- 従来の開発: 時間・コスト・技術
- Vibeコーディング: 対話だけで完成
- 具体的な差（時間・予算・難易度）

🎬 制作過程実演 (5:00-10:00)
- Vibeコーディング画面録画
- AIとの対話例
- リアルタイムでページが完成する様子

💡 可能性提示 (10:00-12:00)
- 「あなたにもできること」
- 今後の展望・可能性
- 体験デモへの誘導
```

### **🚀 動画3: Vibeコーディング体験デモ (10分)**

#### **構成**
```
🎯 デモ開始 (0:00-2:00)
- 今から何を作るか説明
- 必要な準備（なし！）
- 開始時の画面

💬 AIとの対話 (2:00-7:00)
- 実際の会話例
- ページが徐々に完成していく様子
- エラーが出た時の対処法

✅ 完成確認 (7:00-9:00)
- 実際に動くページの確認
- 機能テスト
- 「たった○分で完成」の驚き

🚀 次のアクション (9:00-10:00)
- 無料ウェビナーで詳しく学べる
- コミュニティでサポート受けられる
- 今すぐ始められる
```

---

## 🔧 技術要件

### **フロントエンド**
- **フレームワーク**: Next.js 15.3.5 (既存プロジェクト拡張)
- **スタイリング**: Tailwind CSS (既存統一)
- **レスポンシブ**: モバイルファースト
- **PWA**: オフライン視聴対応（将来的）

### **動画配信**
- **プラットフォーム**: Vimeo Pro または YouTube Premium
- **埋め込み**: カスタムプレイヤー
- **機能**: 
  - 章分け・タイムスタンプジャンプ
  - 速度調整
  - 字幕ON/OFF
  - 進捗保存

### **データ管理**
- **進捗管理**: localStorage + Supabase (軽量)
- **ユーザー識別**: メールアドレスベース（既存メルマガ連携）
- **成果投稿**: 簡単なフォーム→Sanity CMS

### **解析・最適化**
- **視聴解析**: 動画のどこで離脱するか
- **コンバージョン計測**: どのステップで次に進むか
- **A/Bテスト**: CTA位置・文言の最適化

---

## 📊 学習進捗管理機能

### **進捗トラッキング**
```javascript
// 進捗データ構造例
{
  email: "user@example.com",
  courses: {
    "chatgpt-master": {
      completed: true,
      watchTime: 900, // 秒
      chapters: [true, true, true, true, true],
      lastWatched: "2025-07-16T10:30:00Z"
    },
    "site-creation": {
      completed: false,
      watchTime: 300,
      chapters: [true, true, false, false],
      lastWatched: "2025-07-16T11:00:00Z"
    }
  },
  overallProgress: 60 // %
}
```

### **ガメフィケーション要素**
- **バッジシステム**: 
  - 🥉 ChatGPTマスター (第1講座完了)
  - 🥈 サイト制作理解者 (第2講座完了)  
  - 🥇 Vibeコーディング体験者 (全講座完了)
- **進捗バー**: 視覚的な達成感
- **修了証**: SNSシェア可能な認定証

---

## 🎨 UI/UX設計方針

### **デザインテーマ**
- **親しみやすさ**: 堅くない、気軽に学べる
- **清潔感**: 情報が整理されている
- **達成感**: 進捗が見える化されている

### **カラーパレット**
- **メイン**: オレンジ (#f97316) - 既存サイト統一
- **アクセント**: シアン (#06b6d4) - 既存サイト統一
- **進捗**: グリーン (#10b981) - 完了表示
- **未完了**: グレー (#6b7280) - 未視聴表示

### **モバイル最適化**
- **タップターゲット**: 最小44px
- **縦スクロール**: 横スクロール禁止
- **ローディング**: 高速化・プリロード
- **オフライン**: 部分的なキャッシュ対応

---

## 📈 成功指標 (KPI)

### **視聴関連**
- **完了率**: 各動画の最後まで視聴した割合
- **離脱ポイント**: どの時点で視聴をやめるか
- **リピート率**: 同じ動画を複数回見る割合

### **エンゲージメント**
- **滞在時間**: サイト全体での滞在時間
- **ページビュー**: 学習ページ間の遷移
- **実践率**: ChatGPTを実際に試した人の割合

### **コンバージョン**
- **ウェビナー申込率**: 学習サイト→ウェビナー
- **コミュニティ参加率**: 学習サイト→有料会員
- **シェア率**: SNSでの共有数

### **定性評価**
- **満足度**: 学習後のアンケート評価
- **理解度**: 各章の理解度自己評価
- **継続意向**: 今後も学習したいか

---

## 🚀 実装フェーズ

### **Phase 1: MVP (最小機能)**
- [ ] 学習ポータルページ作成
- [ ] 動画プレイヤー実装
- [ ] 基本的な進捗管理
- [ ] スマホ対応最適化

### **Phase 2: 基本機能**
- [ ] 全3本の動画コンテンツ統合
- [ ] 章分け・タイムスタンプ機能
- [ ] ユーザー進捗保存
- [ ] バッジ・修了証システム

### **Phase 3: 高度機能**
- [ ] 成果投稿機能
- [ ] コミュニティ統合
- [ ] A/Bテスト実装
- [ ] 詳細解析ダッシュボード

### **Phase 4: 最適化**
- [ ] パフォーマンス最適化
- [ ] PWA対応
- [ ] オフライン視聴
- [ ] AI要約・質問機能

---

## 💰 予算見積もり

### **開発工数**
- **Phase 1**: 40時間 (1週間)
- **Phase 2**: 60時間 (1.5週間)  
- **Phase 3**: 80時間 (2週間)
- **動画制作**: 40時間 (撮影・編集)

### **外部サービス**
- **動画ホスティング**: Vimeo Pro ($240/年)
- **データベース**: Supabase ($25/月)
- **解析ツール**: Mixpanel ($89/月)
- **ドメイン・サーバー**: 既存利用

---

## 📝 次のアクション

### **即時実行項目**
1. **動画撮影計画**: 台本作成・撮影スケジュール
2. **MVP設計**: 最初のページ設計・開発開始
3. **既存サイト連携**: メルマガからの流入設計

### **1週間以内**
1. **第1動画**: ChatGPT15分マスター講座撮影
2. **学習ポータル**: 基本ページ実装
3. **テストユーザー**: 社内でのユーザビリティテスト

### **1ヶ月以内**
1. **全動画完成**: 3本の動画コンテンツ公開
2. **フル機能リリース**: 進捗管理・バッジシステム
3. **マーケティング連携**: 既存メルマガ・SNSでの告知

---

この学習サイトにより、単なる特典配布から「価値ある学習体験」へとレベルアップし、より多くのユーザーに長期的な価値を提供できます。

Vibeコーディングの実証としても機能し、「AI Contents Labo = 実践的AI活用の専門家」というブランディングが強化されます。