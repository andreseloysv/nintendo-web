import { searchedDataRaw } from '@/components/searchResults/SearchedDataRaw';

export class SearchDummyRepository {
  // eslint-disable-next-line
  public search(searchTerm: string) {
    return searchedDataRaw;
  }
}
