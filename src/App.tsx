import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";

import { appSt } from "./style.css";

import one from "./assets/1.png";
import two from "./assets/2.png";
import three from "./assets/3.png";
import four from "./assets/4.png";
import five from "./assets/5.png";

import smart from "./assets/smart.png";
import { useEffect, useState } from "react";
import { Gap } from "@alfalab/core-components/gap";
import { StatusBadge } from "@alfalab/core-components/status-badge";

interface Product {
  title: string;
  text?: string;
  image: string;
}

const products: Array<Product> = [
  {
    title: "Кэшбэк 5% в категории Продукты",
    text: "Дополнительная категория каждый месяц",
    image: one,
  },
  {
    title: "+1 попытка крутить барабан суперкэшбэка",
    text: "Выше шанс выиграть до 100% в случайной категории",
    image: two,
  },
  {
    title: "Эксклюзивный кэшбэк от партнёров",
    text: "Доступ к особой подборке",
    image: three,
  },
  {
    title: "Увеличенный лимит кэшбэка",
    text: "7000 ₽ в месяц вместо 5000 ₽ за покупки",
    image: four,
  },
  {
    title: "+3% годовых",
    text: "По накопительному Альфа-Счёту на ежедневный остаток",
    image: five,
  },
];

export const App = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isGameStopped, setIsGameStopped] = useState(false);
  const [selected, setSelected] = useState<null | number>(null);
  const [initialNumbers, setInitialNumbers] = useState<number[]>([
    164, 113, 158, 141,
  ]);
  const [isSmart, setIsSmart] = useState(false);

  const clickSub = () => {
    window.gtag("event", "5629_get_real_sub", {
      variant_name: "5629_1",
    });
  };

  const clickPrize = () => {
    window.gtag("event", "5629_get_sub", {
      variant_name: "5629_1",
    });
  };

  useEffect(() => {
    if (selected !== null) {
      if (selected === 158) {
        setSuccess(true);
      } else {
        setError(true);
      }
    }
  }, [selected]);

  if (isSmart) {
    return (
      <>
        <div className={appSt.smartContainer}>
          <Gap size={12} />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Typography.TitleResponsive
              font="system"
              tag="h1"
              view="small"
              weight="semibold"
              className={appSt.productsTitle}
            >
              Ура, подарок ваш!
            </Typography.TitleResponsive>
          </div>
          <div className={appSt.smartBox}>
            <img src={smart} alt="Картинка Альфа-Смарт" width={250} />
            <Typography.Text view="primary-large" color="primary">
              Альфа-Смарт
            </Typography.Text>
            <Typography.TitleResponsive
              tag="h1"
              view="medium"
              font="system"
              weight="bold"
            >
              1 месяц подписки Альфа-смарт
            </Typography.TitleResponsive>
          </div>

          <Gap size={8} />

          <div className={appSt.smartProducts}>
            <Typography.TitleResponsive
              font="system"
              tag="h2"
              weight="bold"
              view="small"
              className={appSt.smartProductsTitle}
            >
              Входит в подписку
            </Typography.TitleResponsive>

            {products.map((product, index) => (
              <div className={appSt.smartProduct} key={index}>
                <div>
                  <Typography.TitleResponsive
                    font="system"
                    view="small"
                    weight="bold"
                    tag="h3"
                    className={appSt.smartProductTitle}
                  >
                    {product.title}
                  </Typography.TitleResponsive>

                  {product.text && (
                    <Typography.Text
                      view="secondary-large"
                      tag="p"
                      color="secondary"
                      className={appSt.productText}
                    >
                      {product.text}
                    </Typography.Text>
                  )}
                </div>
                <img
                  src={product.image}
                  alt=""
                  width={96}
                  height={96}
                  className={appSt.productIcon}
                />
              </div>
            ))}
          </div>
          <Typography.Text
            view="primary-medium"
            color="secondary"
            style={{ textAlign: "center" }}
          >
            Это только часть привилегий. Посмотреть все привилегии можно на
            следующей странице.
          </Typography.Text>
        </div>

        <Gap size={96} />

        <div className={appSt.bottomBtnThx}>
          <ButtonMobile
            block
            view="primary"
            href="alfabank://multistep-route?fromModule=FORM&stepNumber=0&alias=alfa-subscription-alias&version=2&source=YouthGm"
            onClick={clickSub}
          >
            Забрать подписку бесплатно
          </ButtonMobile>
        </div>
      </>
    );
  }

  return (
    <>
      <Gap size={28} />
      <div className={appSt.container}>
        <Typography.TitleResponsive
          font="system"
          tag="h1"
          view="small"
          weight="semibold"
          className={appSt.productsTitle}
        >
          {success
            ? "Поздравляем, вы выиграли приз!"
            : "Сложите все числа и выиграйте приз"}
        </Typography.TitleResponsive>

        <Gap size={32} />

        {!success && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            {[75, "+", 39, "+", 8, "+", 36, "="].map((number, index) => (
              <Typography.Text key={index} weight="bold" view="primary-medium">
                {number}
              </Typography.Text>
            ))}
          </div>
        )}

        <Gap size={40} />

        {success ? (
          <div
            style={{
              border: "2px solid #F2F3F5",
              padding: "1rem",
              boxSizing: "border-box",
              flex: 1,
              width: "100%",
              borderRadius: "16px",
              textAlign: "center",
              position: "relative",
            }}
          >
            <StatusBadge
              view="positive-checkmark"
              size={20}
              className={appSt.checkMark}
            />
            <Typography.Text weight="bold" view="primary-medium">
              {selected}
            </Typography.Text>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "1rem",
              width: "100%",
            }}
          >
            {initialNumbers.map((number) => (
              <div
                key={number}
                style={{
                  border: "2px solid #F2F3F5",
                  padding: "1rem",
                  boxSizing: "border-box",
                  flex: 1,
                  width: "100%",
                  borderRadius: "16px",
                  textAlign: "center",
                  ...(selected === number &&
                    selected !== 158 && { backgroundColor: "red" }),
                }}
                onClick={() => {
                  if (!isGameStopped) {
                    setSelected(number);
                    setIsGameStopped(true);
                  }
                }}
              >
                <Typography.Text weight="bold" view="primary-medium">
                  {number}
                </Typography.Text>
              </div>
            ))}
          </div>
        )}

        <Gap size={40} />

        {error && (
          <div style={{ textAlign: "center" }}>
            <Typography.Text
              weight="regular"
              color="negative"
              view="primary-large"
            >
              Близко, но нет. Попробуйте еще раз!
            </Typography.Text>
          </div>
        )}
      </div>

      <Gap size={96} />

      <div className={appSt.bottomBtnThx}>
        {success && (
          <ButtonMobile
            block
            view="primary"
            onClick={() => {
              clickPrize();
              setIsSmart(true);
            }}
          >
            Забрать приз
          </ButtonMobile>
        )}
        {error && (
          <ButtonMobile
            block
            view="primary"
            onClick={() => {
              setError(false);
              setSelected(null);
              setIsGameStopped(false);
              setInitialNumbers(initialNumbers.sort(() => 0.5 - Math.random()));
            }}
          >
            Сыграть ещё
          </ButtonMobile>
        )}
      </div>
    </>
  );
};
