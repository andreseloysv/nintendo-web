import { Item, ResultList } from '@/components/searchResults/ResultList';
import { SearchDummyRepository } from '@/components/searchResults/SearchRepository';

enum groupValue {
  FIGURE = 'FIGURE',
  GAME = 'GAME',
}
enum resultListTItle {
  FIGURE = 'amiibo',
  GAME = 'GAMES',
}
export class SearchedResultController {
  private searchRepository: SearchDummyRepository = new SearchDummyRepository();
  public search(searchTerm: string): ResultList[] {
    const searchedDataRaw = this.searchRepository.search(searchTerm);
    return this.mapToSearchedResult(searchedDataRaw);
  }
  // eslint-disable-next-line
  private mapToSearchedResult(searchedDataRaw: any): ResultList[] {
    const searchedResult: ResultList[] = [];
    const { groups } = searchedDataRaw.grouped.pg_s;
    this.setResultList(groups, searchedResult);
    return searchedResult;
  }
  // eslint-disable-next-line
  private setResultList(groups: any, searchedResult: ResultList[]) {
    // eslint-disable-next-line
    groups.forEach((groupRaw: any) => {
      const resultList: ResultList = {
        items: [],
      };
      const { docs } = groupRaw.doclist;
      this.setItem(docs, resultList);

      if (groupRaw.groupValue === groupValue.FIGURE) {
        resultList.title = resultListTItle.FIGURE;
        searchedResult.push(resultList);
        return;
      }
      if (groupRaw.groupValue === groupValue.GAME) {
        resultList.title = resultListTItle.GAME;
        searchedResult.push(resultList);
        return;
      }
      resultList.title = groupRaw.groupValue;
      searchedResult.push(resultList);
    });
  }
  // eslint-disable-next-line
  private setItem(docs: any, resultList: ResultList) {
    // eslint-disable-next-line
    docs.forEach((doc: any) => {
      const item: Item = {};
      item.title = doc.title;
      item.price = doc.price_lowest_f && doc.price_lowest_f > 0 ? `£${doc.price_lowest_f}*` : '';
      if (doc.type === groupValue.FIGURE) {
        item.imageUrl = doc.figure_image_url_s;
        resultList.items.push(item);
        return;
      }
      if (doc.type !== groupValue.GAME) {
        item.imageUrl = doc.image_url;
        resultList.items.push(item);
        return;
      }
      item.imageUrl = doc.image_url_sq_s;
      resultList.items.push(item);
    });
  }
}
