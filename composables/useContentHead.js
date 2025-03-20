// ~/composables/useContentHead.js
import { useHead } from "#imports";

export function useContentHead(data) {
  const contentData = toValue(data);

  if (contentData?.title) {
    useHead({
      title: contentData.title,

      meta: [
        { name: "description", content: contentData.description },
        ...((contentData.meta && contentData.meta.head?.meta) || []),
      ],
    });
  }
}
