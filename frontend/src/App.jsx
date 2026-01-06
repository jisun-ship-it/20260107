import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const sections = useMemo(
    () => [
      {
        id: 'shop',
        title: 'Shop',
        subtitle: '商品を探す',
        items: [
          { label: 'New Arrivals', sublabel: '新着商品' },
          { label: 'Best Sellers', sublabel: '人気商品' },
          { label: 'Deals & Promotions', sublabel: 'セール・キャンペーン' },
          { label: 'Collections', sublabel: 'コレクション' },
          { label: 'Brands', sublabel: 'ブランド' },
        ],
      },
      {
        id: 'categories',
        title: 'Categories',
        subtitle: 'カテゴリー',
        items: [
          { label: 'Women', sublabel: 'レディース' },
          { label: 'Men', sublabel: 'メンズ' },
          { label: 'Kids', sublabel: 'キッズ' },
          { label: 'Accessories', sublabel: 'アクセサリー' },
          { label: 'Shoes', sublabel: 'シューズ' },
          { label: 'Bags', sublabel: 'バッグ' },
        ],
      },
      {
        id: 'product',
        title: 'Product Information',
        subtitle: '商品情報',
        items: [
          { label: 'Size Guide', sublabel: 'サイズガイド' },
          { label: 'Material & Care', sublabel: '素材・お手入れ' },
          { label: 'Customer Reviews', sublabel: 'カスタマーレビュー' },
          { label: 'Sustainability', sublabel: 'サステナビリティ' },
        ],
      },
      {
        id: 'cart',
        title: 'Cart & Checkout',
        subtitle: 'カート・購入',
        items: [
          { label: 'Cart', sublabel: 'カート' },
          { label: 'Checkout', sublabel: '購入手続き' },
          { label: 'Apply Coupon', sublabel: 'クーポン適用' },
          { label: 'Payment Method', sublabel: '支払い方法' },
        ],
      },
      {
        id: 'orders',
        title: 'Orders',
        subtitle: '注文',
        items: [
          { label: 'Order History', sublabel: '注文履歴' },
          { label: 'Order Details', sublabel: '注文詳細' },
          { label: 'Delivery Tracking', sublabel: '配送状況の確認' },
          { label: 'Cancel Order', sublabel: '注文キャンセル' },
          { label: 'Return / Exchange', sublabel: '返品・交換' },
          { label: 'Refund Status', sublabel: '返金状況' },
        ],
      },
      {
        id: 'account',
        title: 'My Account',
        subtitle: 'マイアカウント',
        items: [
          { label: 'Profile & Settings', sublabel: 'プロフィール・設定' },
          { label: 'Saved Addresses', sublabel: '配送先住所' },
          { label: 'Payment Information', sublabel: '支払い情報の管理' },
          { label: 'Wishlist', sublabel: 'お気に入り' },
        ],
      },
      {
        id: 'help',
        title: 'Help & Support',
        subtitle: 'サポート',
        items: [
          { label: 'Help Center', sublabel: 'ヘルプセンター' },
          { label: 'FAQ', sublabel: 'よくある質問' },
          { label: 'Contact Us', sublabel: 'お問い合わせ' },
          { label: 'Shipping & Delivery', sublabel: '配送・お届け' },
        ],
      },
      {
        id: 'about',
        title: 'About & Policies',
        subtitle: '会社情報・ポリシー',
        items: [
          { label: 'About Us', sublabel: '会社概要' },
          { label: 'Store Locator', sublabel: '店舗検索' },
          { label: 'Blog & Stories', sublabel: 'ブログ・特集' },
          { label: 'Privacy Policy', sublabel: 'プライバシーポリシー' },
          { label: 'Terms & Conditions', sublabel: '利用規約' },
        ],
      },
    ],
    []
  )

  const [openSection, setOpenSection] = useState(null)

  const handleToggle = (id) => {
    setOpenSection((current) => (current === id ? null : id))
  }

  return (
    <main className="shell">
      <aside className="side-nav">
        <nav className="side-nav__tree" aria-label="Sidebar navigation">
          {sections.map((section) => {
            const expanded = openSection === section.id
            return (
              <div className="tree-section" key={section.id}>
                <button
                  className="tree-section__trigger"
                  type="button"
                  aria-expanded={expanded}
                  onClick={() => handleToggle(section.id)}
                >
                  <span>
                    <span className="tree-section__title">
                      {section.title}
                    </span>
                    <span className="tree-section__subtitle">
                      {section.subtitle}
                    </span>
                  </span>
                  <span
                    className={`tree-section__chevron ${
                      expanded ? 'is-open' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`tree-section__children ${
                    expanded ? 'is-open' : ''
                  }`}
                >
                  <ul>
                    {section.items.map((item) => (
                      <li key={item.label}>
                        <button type="button">
                          <span>{item.label}</span>
                          <span className="tree-section__subtitle">
                            {item.sublabel}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </nav>
      </aside>
      <section className="content" aria-hidden="true" />
    </main>
  )
}

export default App
