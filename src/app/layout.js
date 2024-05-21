import { inter, jetbrain_mono } from "@app/fonts";
import "./globals.css";
import { Provider } from "@app/providers";

// components
import Header from "@components/Header";
import { GridBackground } from "@components/interface/GridBackgorund";
import PageTransistion from "@components/animations/PageTransistion";
import StairTransistion from "@components/animations/StairTransistion";

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={`${jetbrain_mono.variable} ${inter.variable}`}>
          <Provider>
            <GridBackground>
            <Header />
            <StairTransistion/>
            <PageTransistion>
              {children}
            </PageTransistion>
            </GridBackground>
          </Provider>
        </body>
      </html>
    </>
  );
}
