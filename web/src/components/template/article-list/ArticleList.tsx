import React, { useEffect, useState } from 'react';
import { ArticleCard, Container, Jumbotron, Loading } from 'components';
import { ArticleListState, defaultArticleListState } from './';
import { Article } from 'instinct-interfaces';
import { articleService } from '../../../app/service/article';

export function ArticleList() {
  const [{ articles, showSpinner }, setState] = useState<ArticleListState>(defaultArticleListState);

  useEffect(() => {
    async function getArticles(): Promise<void> {
      const articles: Article[] = await articleService.getAll();
      setState({
        articles,
        showSpinner: false,
      });
    }
    getArticles();
  }, []);

  return (
    <>
      <Jumbotron title="Latest News">
        <p>Stay updated with our latest news!</p>
      </Jumbotron>
      <Container>
        <div className="articles-container">
          <Loading isLoading={showSpinner}>
            {
              articles.length === 0 && (
                <>
                  <h3>Hmmm...</h3>
                  <p>It looks like there aren't any articles.</p>
                </>
              )
            }
            {articles.map(article => (
              <ArticleCard article={article} key={article.id} />
            ))}
          </Loading>
        </div>
      </Container>
    </>
  );
}
