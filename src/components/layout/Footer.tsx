import React from 'react'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer_content">
        <div className="footer_inner">
          <div className="footer_inner-header">
            <h2>
              <img src="src\assets\logo.svg" alt="flowlyサービスロゴ画像" />
            </h2>
            <p>業務効率化プラットフォーム</p>
          </div>
          <p className="footer_inner-text">
            信頼できるSaaS体験を、あなたの手に。<br/>
            セキュアな環境 × シンプルな設計 × 柔軟な拡張性。<br/>
            ビジネスの成長に、本当に必要な仕組みだけを。
          </p>
        </div>
        <dl className="footer_inner" >
          <dt>会社名</dt>
          <dd>株式会社サンプル</dd>
          <dt>所在地</dt>
          <dd>〒150-0001<br/>東京都渋谷区神宮前4-3-10 サンプルタワー5F</dd>
          <dt>TEL</dt>
          <dd>0000-150-0001</dd>
          <dt>Mail</dt>
          <dd>info@samplelink.co.jp</dd>
        </dl>
      </div>
      <small className="footer_small">&copy; Samplelink Inc. All Rights Reserved.</small>
    </footer>
  )
}
