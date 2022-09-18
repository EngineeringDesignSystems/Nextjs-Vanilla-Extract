import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Button } from "../components/Button/Button";
import { Divider } from "../components/Divider/Divider";
import { PreviewColorToken } from "../components/PreviewColorToken/PreviewColorToken";
import { Text } from "../components/Text/Text";
import {
  darkThemeClass,
  lightThemeClass,
  primitiveColors,
  themeSpecificColorsKeys,
  TThemeColorKey,
  TThemeTypographyKey,
  vars,
} from "../theme.css";
import { appStyles, headerStyles, typographyWrapperStyles } from "./index.css";

const Home: NextPage = () => {
  const [currentTheme, setCurrentTheme] = useState(lightThemeClass);
  const primitiveColorsPrintout = Object.keys(primitiveColors).map(
    (colorKey) => (
      <PreviewColorToken
        key={`${colorKey}-listItem`}
        colorVariant={colorKey as TThemeColorKey}
      />
    )
  );
  const themeColorsPrintout = themeSpecificColorsKeys.map((colorKey) => {
    return (
      <PreviewColorToken
        key={`${colorKey}-listItem`}
        isCoreColor={true}
        colorVariant={colorKey as TThemeColorKey}
      />
    );
  });

  // UI PRINTOUTS
  const typographyPrintout = Object.keys(vars.typography).map((key: string) => {
    return (
      <Text key={`${key}-listItem`} styleVariant={key as TThemeTypographyKey}>
        {key}
      </Text>
    );
  });
  return (
    <div className={currentTheme}>
      <Head>
        <title>Design System Starter</title>
        <meta name="description" content="here we gooooooooo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={appStyles}>
          <div className={headerStyles}>
            <Text
              styleVariant="heading1"
              tagElement="h1"
              colorVariant="onBackground"
            >
              Design System Starter: React + Vanilla Extract + Recipes
            </Text>
            <Button
              label="Toggle Theme"
              onClick={() => {
                setCurrentTheme(
                  currentTheme === darkThemeClass
                    ? lightThemeClass
                    : darkThemeClass
                );
              }}
              sizeVariant="small"
              styleVariant="primary"
            />
          </div>
          <Divider />
          <div className={typographyWrapperStyles}>
            <Text styleVariant="heading2">Typography</Text>
            <Divider />
            {typographyPrintout}
          </div>
          <Divider />
          <Text styleVariant="heading2">Colors</Text>
          <Divider />
          {/* <PreviewUI /> */}
          <Text styleVariant="heading3">Variable Semantic Colors</Text>
          {themeColorsPrintout}
          <Text styleVariant="heading3">Static Primitives Colors</Text>
          {primitiveColorsPrintout}
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
