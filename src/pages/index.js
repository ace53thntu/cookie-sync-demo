import { Col, Row } from "antd";
import _ from "lodash";
import Head from "next/head";
import { useRouter } from "next/router";
import * as React from "react";
import { useSelector } from "react-redux";
import slugify from "slugify";

import { FEATURE_IDS } from "../common/defines";
import useProductData from "../common/useProductData";
import LayoutOne from "../components/layouts/LayoutOne";
import Container from "../components/other/Container";
import Banners from "../components/shop/Banners";
import ShopLayout from "../components/shop/ShopLayout";
import productData from "../data/product.json";

export default function Home() {
  const router = useRouter();

  const handleIdentifyUser = () => {
    window.AicactusSDK.identify("4b247b8e-c1b0-44f2-8729-cc3236de89bc", {
      name: "Grace Hopper",
      email: "grace@usnavy.gov",
    });
  };

  const handleSyncCookie = () => {
    window.AicactusSDK.cookieSync({
      vendorCode: "google",
      vendorUserId: "2B559491-2D37-4338-8F71-7FEAA691A401",
    });
  };

  return (
    <LayoutOne title="Home">
      <Head>
        <script type="text/javascript" src="/libs/ads.js"></script>
      </Head>
      <div className="shop-layout">
        <Container type={"fluid"}>
          <Row gutter={30}>
            <Col className="gutter-row" xs={24} lg={4}>
              <div className="shop-sidebar">123131</div>
            </Col>
            <Col className="gutter-row" xs={24} lg={4}>
              <button onClick={handleIdentifyUser}>Identify User</button>
            </Col>
            <Col className="gutter-row" xs={24} lg={4}>
              <button onClick={handleSyncCookie}>Sync Cookie</button>
            </Col>
            <Col className="gutter-row" xs={24} lg={4}>
              {/* <div id="display_ads_2"></div> */}
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutOne>
  );
}
