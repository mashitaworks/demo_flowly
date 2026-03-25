import React from 'react'

export function Header() {
  return (
    <header className="header">
      <div className="header_inner">
        <h1>
          <a className="header_logo" href="#top">
            <img src="src\assets\logo.svg" alt="flowlyサービスロゴ画像" />
          </a>
        </h1>
        <div className="header_inner-btn">
          <a href="#" className='button button-secondary'><span>資料ダウンロード</span></a>
          <a href="#" className='button button-primary'><span>無料で始める</span></a>
        </div>
      </div>
      <div className="btn_materials">
        <ul className="btn_materials-inner">
          <li></li>
          <li><p></p></li>
        </ul>
      </div>
    </header>
  )
}
