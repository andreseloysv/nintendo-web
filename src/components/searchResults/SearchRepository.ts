import { searchedDataRaw } from '@/components/searchResults/SearchedDataRaw';

export class SearchDummyRepository {
  public search(searchTerm: string) {
    return searchedDataRaw;
  }
}
