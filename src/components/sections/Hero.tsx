import React, { useEffect } from 'react'

export function Hero() {
  useEffect(() => {
    const sections = document.querySelectorAll('.section')
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )
    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="app-main">
      <section className="hero section" id="top">
        <ul className="hero_inner">
          <li className="hero_content">
            <h1 className="hero_title">
              <img src="/hero_title.svg" alt="成長を止めない" />
            </h1>
            <h2 className="hero_subtitle">スタートアップのための<br/>業務効率化プラットフォーム</h2>
            <p className="hero_text">チームの情報共有からタスク管理、データ分析までを一元化</p>
            <div className="cta">
              <p className="cta_text">カンタン<span>1分</span>登録</p>
              <a href="#" className="button button-primary">
                <span>無料でスタート</span>
              </a>
            </div>
          </li>
          <li className="hero_pic">
            <img src="/hero_img.svg" alt="Flowlyダッシュボード画面" />
          </li>
        </ul>
      </section>

      <section className="">
        <div className="slide_text">
          <p>すでに</p>
          <span className="point_number">300</span>
          <span className="point_text">社</span>
          <p>以上のスタートアップが導入</p>
        </div>
        <div className="slider-wrapper">
          <ul className="slider slider_01">
            <li className="slide">
              <img
                src="/company_01.svg"
                alt="企業ロゴ"
              />
            </li>
            <li className="slide">
              <img
                src="/company_02.svg"
                alt="企業ロゴ"
              />
            </li>
            <li className="slide">
              <img
                src="/company_03.svg"
                alt="企業ロゴ"
              />
            </li>
            <li className="slide">
              <img
                src="/company_04.svg"
                alt="企業ロゴ"
              />
            </li>
            <li className="slide">
              <img
                src="/company_05.svg"
                alt="企業ロゴ"
              />
            </li>
            <li className="slide">
              <img
                src="/company_06.svg"
                alt="企業ロゴ"
              />
            </li>
          </ul>
          <ul className="slider slider_02">
            <li className="slide">
              <img
                src="/company_01.svg"
                alt="企業ロゴ"
              />
            </li>
            <li className="slide">
              <img
                src="/company_02.svg"
                alt="企業ロゴ"
              />
            </li>
            <li className="slide">
              <img
                src="/company_03.svg"
                alt="企業ロゴ"
              />
            </li>
            <li className="slide">
              <img
                src="/company_04.svg"
                alt="企業ロゴ"
              />
            </li>
            <li className="slide">
              <img
                src="/company_05.svg"
                alt="企業ロゴ"
              />
            </li>
            <li className="slide">
              <img
                src="/company_06.svg"
                alt="企業ロゴ"
              />
            </li>
          </ul>
        </div>
      </section>

      <section className="section bg-blue ">
        <div className="section_inner bg-about">
          <div className="section_header">
            <span className="section_title-point">ABOUT</span>
            <h2 className="section_title">確かな実績が、信頼の証</h2>
          </div>
          <p className="read-text">プロダクトリリースからわずか2年で、300社を超える企業が導入。 <br/>資金調達直後のチームからシリーズBの急成長企業まで、 <br/>規模を問わず“現場が動く仕 組み”として選ばれています。</p>
          <ul className="about_content">
            <li className="about_inner about_period">
              <div className="about_header">
                <div className="about_icon">
                  <img src="/about_icon01.svg" alt="calendar" />
                </div>
                <h3 className="about_title">導入期間</h3>
              </div>
              <div className="about_main">
                <p>最短</p>
                <span className="point">1</span>
                <span className="unit">日</span>
              </div>
            </li>
            <li className="about_inner about_security">
              <div className="about_header">
                <div className="about_icon">
                  <img src="/about_icon02.svg" alt="security" />
                </div>
                <h3 className="about_title">安全とセキュリティ</h3>
              </div>
              <div className="about_main">
                <p>ISO27001準拠の<br/>セキュリティで安心</p>
                <div className="about_main-pic">
                  <img src="/about_img.svg" alt="ISOロゴ画像" />
                </div>
              </div>
            </li>
            <li className="about_inner about_support">
              <div className="about_header">
                <div className="about_icon">
                  <img src="/about_icon03.svg" alt="support" />
                </div>
                <h3 className="about_title">サポート</h3>
              </div>
              <div className="about_main">
                <p>カスタマーサクセスチームが<br/>
                    導入から運用まで伴走</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="section">
        <div className="section_inner">
          <div className="section_header">
            <span className="section_title-point">WORK</span>
            <h2 className="section_title">あなたのチームを強くする、３つの機能</h2>
          </div>
          <ul className="work_content">
            <li className="work_inner">
              <div className="work_description">
                  <h3 className="work_description-title">自動レポーティング</h3>
                  <p className="work_description-txt">リアルタイムでKPIを可視化。日次レポートを自動生成し、意思決定のスピードを加速します。「データ分析が苦手」でも、数字の見える化がワンクリックで完了。</p>
                  <ul className="label_list">
                    <li className="label_inner">
                      <div className="icon">
                        <img src="/work_icon01.svg" alt="icon" />
                      </div>
                      <p>時間短縮</p>
                    </li>
                    <li className="label_inner">
                      <div className="icon">
                        <img src="/work_icon02.svg" alt="icon" />
                      </div>
                      <p>効率化</p>
                    </li>
                    <li className="label_inner">
                      <div className="icon">
                        <img src="/work_icon03.svg" alt="icon" />
                      </div>
                      <p>リアルタイム把握</p>
                    </li>
                  </ul>
              </div>
              <div className="work_pic">
                <img src="/work_img01.svg" alt="画像：自動レポーティング画面" />
              </div>
            </li>

            <li className="work_inner">
              <div className="work_pic">
                <img src="/work_img02.svg" alt="画像：チーム共有ボード画面" />
              </div>
              <div className="work_description">
                  <h3 className="work_description-title">チーム共有ボード</h3>
                  <p className="work_description-txt">プロジェクト進捗、ドキュメント、コメントをひとつの画面に集約。 誰が何をしているのか、一目で把握。 リモートチームでもスムーズに連携できます。</p>
                  <ul className="label_list">
                    <li className="label_inner">
                      <div className="icon">
                        <img src="/work_icon04.svg" alt="icon" />
                      </div>
                      <p>チームワークの向上</p>
                    </li>
                    <li className="label_inner">
                      <div className="icon">
                        <img src="/work_icon05.svg" alt="icon" />
                      </div>
                      <p>情報共有</p>
                    </li>
                    <li className="label_inner">
                      <div className="icon">
                        <img src="/work_icon06.svg" alt="icon" />
                      </div>
                      <p>迅速化</p>
                    </li>
                    <li className="label_inner">
                      <div className="icon">
                        <img src="/work_icon07.svg" alt="icon" />
                      </div>
                      <p>見える化</p>
                    </li>
                  </ul>
              </div>
            </li>

            <li className="work_inner">
              <div className="work_description">
                  <h3 className="work_description-title">インテグレーション連携</h3>
                  <p className="work_description-txt">Slack・Notion・Google Workspaceなど、日常で使うツールとシームレスに連携。既存のワークフローを変えずに、生産性を最大化します。</p>
                  <ul className="label_list">
                    <li className="label_inner">
                      <div className="icon">
                        <img src="/work_icon08.svg" alt="icon" />
                      </div>
                      <p>コスト削減</p>
                    </li>
                    <li className="label_inner">
                      <div className="icon">
                        <img src="/work_icon09.svg" alt="icon" />
                      </div>
                      <p>ツール集約</p>
                    </li>
                    <li className="label_inner">
                      <div className="icon">
                        <img src="/work_icon10.svg" alt="icon" />
                      </div>
                      <p>シームレス連携</p>
                    </li>
                  </ul>
              </div>
              <div className="work_pic">
                <img src="/work_img03.svg" alt="画像：インテグレーション連携の説明画像" />
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="section_inner">
          <div className="section_header">
            <span className="section_title-point">STEP</span>
            <h2 className="section_title">導入のステップ</h2>
          </div>
          <p className="read-text">導入は、シンプルな3ステップ<br/>
            どんなチームでも、最短1日で運用をスタートできます。
          </p>
          <ul className="step_content">
            <li className="step_inner">
              <div className="step_header">
                <p  className="step_header-text">
                  STEP1
                </p>
                <h3 className="step_header-title">無料アカウント登録</h3>
              </div>
              <p className="step_text">メールアドレスだけで即発行が可能です。</p>
              <div className="step_pic">
                <img src="/step_img01.svg" alt="画像：無料アカウント登録の説明" />
              </div>
            </li>

            <li className="step_inner">
              <div className="step_header">
                <p  className="step_header-text">
                  STEP2
                </p>
                <h3 className="step_header-title">チーム設定</h3>
              </div>
              <p className="step_text">メンバーを招待してワークスペースを作成</p>
              <div className="step_pic secondary">
                <img src="/step_img02.svg" alt="画像：チーム設定の説明" />
              </div>
            </li>

            <li className="step_inner">
              <div className="step_header">
                <p  className="step_header-text">
                  STEP3
                </p>
                <h3 className="step_header-title">利用開始</h3>
              </div>
              <p className="step_text">すぐにプロジェクトを稼働！</p>
              <div className="step_pic last">
                <img src="/step_img03.svg" alt="画像：利用開始の説明" />
              </div>
            </li>
          </ul>
        </div>
      </section>
      
      <section className="section bg-rightblue">
        <div className="section_inner">
          <ul className="cta_content">
            <li className="cta_inner">
              <h3 className="cta_inner-title">成長に集中するための時間を、<br/>今すぐ取り戻そう。</h3>
              <p className="">チームの時間は有限です。</p>
              <p className="cta_inner-text">日々の作業を自動化し、もっと「未来をつくる仕事」に使いましょう。</p>
              <div className="cta">
                <p className="cta_text">カンタン<span>1分</span>登録</p>
                <a href="#" className="button button-primary">
                  <span>無料でスタート</span>
                </a>
              </div>
            </li>
            <div className="cta_pic">
              <img src="/cta_img.svg" alt="画像:サービス利用のイメージ画像" />
            </div>
          </ul>
        </div>
      </section>
    </main>
  )
}
