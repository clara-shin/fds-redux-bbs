import reducer, {
  LOADING,
  articleListLoading,
} from './articleList';

describe('articleList', () => {
  it('articleListLoading 동작여부 확인', () => {
    const action = articleListLoading();
    expect(action).toEqual({
      type: LOADING,
    });
  });

  it('reducer text', () => {
    const state = reducer(undefined, {});
    expect(state.loading).toBe(false);
    expect(state.articles).toEqual([]);
  });

  it('articleListLoading 넘겼을 때의 상태', () =>{
    const state = reducer(undefined, articleListLoading());
    expect(state.loading).toBe(true);
    expect(state.articles).toEqual([]);
  });

  it('articleListLoading를 articles가 존재하는 상태에 적용', () =>{
    const state=reducer({
      loading: false,
      articles: [1,2,3],
    }, articleListLoading());
    expect(state.loading).toBe(true);
    expect(state.articles).toEqual([1,2,3]);
  });
});
