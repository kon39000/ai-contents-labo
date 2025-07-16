# Vercel カスタムドメイン設定ガイド

このガイドでは、Vercelプロジェクトに「ai-contents-labo.com」をカスタムドメインとして設定する手順を記録します。

## 🌐 ドメイン情報
- **ドメイン名**: ai-contents-labo.com
- **レジストラ**: Xserver
- **プロジェクト名**: acl-main
- **Vercel URL**: https://acl-main.vercel.app/

---

## 📋 設定手順

### 1. Vercelダッシュボードでドメイン追加

1. **Vercelダッシュボード**にアクセス: https://vercel.com/dashboard
2. **プロジェクト「acl-main」**を選択
3. **Settings** → **Domains** タブを開く
4. **Add Domain** ボタンをクリック
5. ドメイン名「**ai-contents-labo.com**」を入力
6. **Add** ボタンをクリック

### 2. Vercelが表示するDNSレコード情報

Vercelが表示する設定値（2025年7月時点）：

```
Type: A
Name: @ (または空欄)
Value: 76.76.19.61

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

※ IPアドレスは変更される可能性があるため、必ずVercelの画面で最新の値を確認してください。

### 3. Xserverでの DNS レコード設定

#### 3-1. Xserverサーバーパネルにログイン
1. https://www.xserver.ne.jp/ にアクセス
2. **サーバーパネル**にログイン

#### 3-2. DNS レコード設定画面へ
1. **ドメイン** → **DNSレコード設定**を選択
2. 「**ai-contents-labo.com**」を選択
3. **DNSレコード追加**タブを開く

#### 3-3. Aレコードを追加（ルートドメイン用）
```
ホスト名: 空欄（@と同じ意味）
種別: A
内容: 76.76.19.61
優先度: 空欄
```
**確認画面へ進む** → **追加する**

#### 3-4. CNAMEレコードを追加（www用）
```
ホスト名: www
種別: CNAME  
内容: cname.vercel-dns.com
優先度: 空欄
```
**確認画面へ進む** → **追加する**

### 4. ネームサーバー設定の確認

#### 4-1. 正しいネームサーバー設定
Xserverのネームサーバーが設定されていることを確認：
```
ns1.xserver.jp
ns2.xserver.jp
ns3.xserver.jp
ns4.xserver.jp
ns5.xserver.jp
```

#### 4-2. ネームサーバーの確認・変更方法
1. **Xserverアカウント** → **ドメイン管理**
2. 「ai-contents-labo.com」の**ネームサーバー設定**
3. 「Xserver」を選択（デフォルト）
4. 必要に応じて変更を保存

### 5. Vercelで設定完了を確認

1. Vercelダッシュボードの**Domains**タブに戻る
2. ドメインのステータスを確認：
   - 🔄 **Checking DNS Records**: DNS確認中
   - ⚠️ **Invalid Configuration**: 設定に問題あり
   - ✅ **Valid Configuration**: 設定完了

### 6. SSL証明書の自動発行

DNS設定が正しく反映されると、Vercelが自動的に：
- Let's Encrypt SSL証明書を発行
- HTTPSリダイレクトを設定
- www/非wwwのリダイレクトを設定

---

## ⏱️ 反映時間

- **DNS反映**: 最大24-48時間（通常は1-6時間）
- **SSL証明書**: DNS反映後、自動で数分以内に発行

---

## 🔍 設定確認方法

### コマンドラインでの確認
```bash
# DNSレコードの確認
nslookup ai-contents-labo.com
nslookup www.ai-contents-labo.com

# より詳細な確認
dig ai-contents-labo.com
dig www.ai-contents-labo.com

# HTTPS接続確認
curl -I https://ai-contents-labo.com
```

### ブラウザでの確認
1. https://ai-contents-labo.com にアクセス
2. https://www.ai-contents-labo.com にアクセス
3. 両方が正しく表示され、HTTPSになっていることを確認

---

## 🚨 トラブルシューティング

### よくある問題と解決方法

#### 1. 「Invalid Configuration」が続く場合
- DNSレコードの値が正しいか再確認
- ネームサーバーがXserverになっているか確認
- 48時間待っても解決しない場合は、DNSレコードを削除して再設定

#### 2. サイトが表示されない
- DNS反映待ち（最大48時間）
- ブラウザのキャッシュをクリア
- シークレットモードで確認

#### 3. SSL証明書エラー
- DNS設定が完了するまで待つ
- Vercelダッシュボードで手動で証明書を再発行

#### 4. リダイレクトループ
- Xserver側でリダイレクト設定がないか確認
- .htaccessファイルを確認

---

## 📝 設定完了チェックリスト

- [ ] Vercelにドメインを追加
- [ ] XserverでAレコードを設定
- [ ] XserverでCNAMEレコード（www）を設定
- [ ] ネームサーバーがXserverになっているか確認
- [ ] Vercelで「Valid Configuration」表示を確認
- [ ] https://ai-contents-labo.com でアクセス可能
- [ ] https://www.ai-contents-labo.com でアクセス可能
- [ ] SSL証明書が有効（HTTPSで接続）
- [ ] 非HTTPSからHTTPSへの自動リダイレクト確認

---

## 📅 設定履歴

- **2025年7月14日**: 初回設定実施
- **ドメイン取得**: Xserver
- **プロジェクト作成**: GitHub → Vercel連携

---

## 🔗 関連リンク

- [Vercel Domains Documentation](https://vercel.com/docs/projects/domains)
- [Xserver マニュアル - DNSレコード設定](https://www.xserver.ne.jp/manual/man_domain_dns_setting.php)
- [プロジェクトGitHub](https://github.com/kon39000/ai-contents-labo)

---

## 💡 Tips

1. **DNS確認サービス**
   - https://dnschecker.org/ で世界中のDNS反映状況を確認可能

2. **開発時の確認**
   - hosts ファイルを編集してローカルで事前確認も可能

3. **メール設定**
   - ドメインメールを使う場合は、MXレコードの設定も必要

4. **サブドメイン追加**
   - api.ai-contents-labo.com などは同様の手順でCNAMEレコードを追加

---

このガイドは必要に応じて更新してください。