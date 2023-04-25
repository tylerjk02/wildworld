export const load = (params: any) => {
  const slug = params.params.slug;

  const fetchItemSummary = async (e: string) => {
    const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${e}`)
    const data = await res.json();
    return data;
  }

  const fetchItemDetails = async (e: string) => {
    const res = await fetch(`https://en.wikipedia.org/w/api.php?action=parse&page=${e}&format=json`);
    const data = await res.json();

    if(!data.hasOwnProperty('error')) {
      return data;
    }
  }

  
  return {
    slug: slug,
    streamed: {
      itemSummary: fetchItemSummary(slug),
      itemDetails: fetchItemDetails(slug)
      
    }
  }
}
