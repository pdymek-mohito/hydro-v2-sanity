import {Heading} from './Text';
import imageUrlBuilder from "@sanity/image-url";
import type {SanityHeroHome} from '~/lib/type';
import { projectId, dataset } from "~/clients/sanityClient";

const builder = imageUrlBuilder({ projectId, dataset });

type Props = {
  hero: SanityHeroHome;
};

export function HomeHero({hero}: Props) {
  const { title, content } = hero;

  return (
    <section
      className='relative justify-end flex flex-col w-full -mt-nav h-[700px]'
    >
      {content?.image &&
          <img
            className="h-full absolute top-0 left-0 -z-10 object-cover"
            src={builder.image(content?.image).width(1920).height(600).quality(95).url()}
            width={1920}
            height={600}
            alt={title ?? ''}
          />
      }

      <div className="flex flex-col items-baseline justify-between gap-4 px-6 py-8 sm:px-8 md:px-12 bg-gradient-to-t dark:from-contrast/60 dark:text-primary from-primary/60 text-contrast">
        {title && (
          <Heading format as="h2" size="display" className="max-w-md">
            {title}
          </Heading>
          
        )}
      </div>
    </section>
  );
}
