"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useSettings } from "@/hook/use-settings";
import { shopService } from "@/services/shop";
import { useTranslation } from "react-i18next";
import { Paginate } from "@/types/global";
import { Shop } from "@/types/shop";
import { extractDataFromPagination } from "@/utils/extract-data";
import { ListHeader } from "@/components/list-header";
import { Swiper, SwiperSlide } from "swiper/react";
import { ShopCardUi2 } from "@/components/shop-card/shop-card-ui-2";
import { buildUrlQueryParams } from "@/utils/build-url-query-params";

interface NearYouProps {
  data?: Paginate<Shop>;
}

export const NearYou = ({ data }: NearYouProps) => {
  const { language } = useSettings();
  const { t } = useTranslation();
  const { data: shops } = useInfiniteQuery(
    ["shops", language?.locale, { column: "id", sort: "desc" }],
    () => shopService.getAll({ lang: language?.locale, perPage: 8, column: "id", sort: "desc" }),
    {
      initialData: data ? { pages: [data], pageParams: [1] } : undefined,
    }
  );

  const shopList = extractDataFromPagination(shops?.pages);

  return (
    <div className="mt-14">
      <ListHeader
        title={t("new.salons")}
        link={buildUrlQueryParams("/shops", { column: "id", sort: "desc" })}
      />
      <Swiper
        breakpoints={{
          0: { slidesPerView: 1.5, spaceBetween: 10 },
          992: { slidesPerView: 4, spaceBetween: 30 },
        }}
      >
        {shopList?.map((shop) => (
          <SwiperSlide key={shop.id}>
            <ShopCardUi2 data={shop} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
