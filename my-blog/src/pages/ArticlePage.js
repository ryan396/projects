import React , { useState, useEffect }from 'react'
import ArticlesList from '../components/ArticlesList';
import articles from './article-content';
import articleContent from './article-content';
import NotFoundPage from './NotFoundPage';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvoteSection';
import AddCommentForm from '../components/AddCommentForm';

const ArticlePage = ({ match }) => {

    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch (`/api/articles/${name}`);
            const body = await result.json();
            setArticleInfo(body);
        }
        fetchData();
       
    }, [name]);

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: []});    

    if (!article) return <NotFoundPage />

    const otherArticles = articleContent.filter(article => article.name !== name);

    return (
        <React.Fragment>
            <div>
                <h1>{article.title}</h1>
                <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
                {article.content.map((paragraph, key) => (
                    <p key={key}>{paragraph}</p>
                ))}
                <CommentsList comments={articleInfo.comments} />
                <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
            <h3>Other Articles</h3>
            <ArticlesList articles={otherArticles} />
            </div>
        </React.Fragment>
    );
}
    export default ArticlePage;