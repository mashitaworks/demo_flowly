import React from 'react'

export function Header() {
  return (
    <header className="header">
      <div className="header_inner">
        <h1>
          <a className="header_logo" href="#top">
            <img src="/logo.svg" alt="flowlyサービスロゴ画像" />
          </a>
        </h1>
        <div className="header_inner-btn">
          <a href="#" className='button button-secondary'><span>資料ダウンロード</span></a>
          <a href="#" className='button button-primary'><span>無料で始める</span></a>
        </div>
      </div>
      <div className="btn_materials">
        <a href="#" className="btn_materials-inner">
          <div><img src="/materials.svg" alt="flowlyサービスロゴ画像" /></div>
          <p>資料ダウンロード</p>
        </a>
      </div>
    </header>
  )
}
