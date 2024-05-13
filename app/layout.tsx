import type { Metadata } from 'next'
import './globalStyles/normalize.css'
import './globalStyles/globals.css'
import './globalStyles/header.css'
import './globalStyles/menu.css'
import './globalStyles/mobile-navbar.css'
import './globalStyles/catalog-menu.css'
import './globalStyles/search-modal.css'
import './globalStyles/cart-popup.css'
import './globalStyles/footer.css'
import './globalStyles/slick.css'
import './globalStyles/slick-theme.css'
import Layout from '@/components/layouts/Layout'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <Script id='metrika-counter' strategy='afterInteractive'>
          {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(97261094, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true
            });`}
        </Script>
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
