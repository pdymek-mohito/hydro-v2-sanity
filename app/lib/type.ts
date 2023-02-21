import type {Storefront as HydrogenStorefront} from '@shopify/hydrogen';
import type {Image} from '@sanity/types';
import type {
  CountryCode,
  CurrencyCode,
  LanguageCode,
} from '@shopify/hydrogen/storefront-api-types';

export type Locale = {
  language: LanguageCode;
  country: CountryCode;
  label: string;
  currency: CurrencyCode;
};

export type Localizations = Record<string, Locale>;

export type I18nLocale = Locale & {
  pathPrefix: string;
};

export type Storefront = HydrogenStorefront<I18nLocale>;

export enum CartAction {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  UPDATE_CART = 'UPDATE_CART',
  UPDATE_DISCOUNT = 'UPDATE_DISCOUNT',
  UPDATE_BUYER_IDENTITY = 'UPDATE_BUYER_IDENTITY',
}
export type CartActions = keyof typeof CartAction;


export type SanityHeroHome = {
  content?: SanityImageWithProductHotspots | SanityProductWithVariant;
  link?: SanityLink;
  title?: string;
};

export type SanityImageWithProductHotspots = {
  _key?: string;
  _type: 'imageWithProductHotspots';
  image: SanityAssetImage;
  productHotspots: SanityProductHotspot[];
};

export type SanityProductWithVariant = {
  _id: string;
  _key?: string;
  _type: 'productWithVariant';
  available: boolean;
  gid: string;
  slug?: string;
  variantGid: string;
};

export type SanityLink = SanityLinkExternal | SanityLinkInternal;

export interface SanityAssetImage extends Image {
  _type: 'image';
  altText?: string;
  blurDataURL: string;
  height: number;
  url: string;
  width: number;
}

export type SanityLinkExternal = {
  _key: string;
  _type: 'linkExternal';
  newWindow?: boolean;
  url: string;
  title: string;
};

export type SanityLinkInternal = {
  _key: string;
  _type: 'linkInternal';
  documentType: string;
  slug?: string;
  title: string;
};

export type SanityProductHotspot = {
  _key?: string;
  product: SanityProductWithVariant;
  x: number;
  y: number;
};