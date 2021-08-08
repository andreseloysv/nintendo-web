import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';
import SearchedResultLists from '@/components/searchResults/SearchedResultLists.vue';

jest.mock('swiper/swiper.scss', () => ({
  __esModule: true,
  default: 'mockedDefaultExport',
  namedExport: jest.fn(),
}));

const createComponent = (propsData: object = {}) => {
  return mount(SearchedResultLists, {
    propsData,
  });
};

let wrapper: Wrapper<SearchedResultLists>;

describe('SearchedResultLists.vue', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe('Game list', () => {
    it('should display the game with the title "Mario Kart 8 Deluxe"', () => {
      wrapper = createComponent({ searchTerm: 'Mario' });
      expect(wrapper.find('#item-title-0-mario-kart-8-deluxe').text()).toContain('Mario Kart 8 Deluxe');
    });
  });
});
