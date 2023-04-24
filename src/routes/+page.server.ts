export const load = () => {
  const fetchListPage = async () => {
    const res = await fetch(`https://en.wikipedia.org/w/api.php?action=parse&page=Wikipedia:Unusual_articles&format=json`);
    const returnObj = await res.json();
    const parse = returnObj.parse;
    let linkList: any[] = [];
    let linkIndex = 0;
    parse.links.forEach((e: object) => {
      linkIndex += 1;
      if(linkIndex >= 308 && linkIndex < 4000) {
        linkList.push(e);
      }
    })
    console.log(linkList);
    const data = linkList;
    return data;
  }
  return {
    streamed: {
      listPage: fetchListPage()      
    }
  }
}