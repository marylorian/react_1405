import React from "react";
import {ARTICLES_STATUS} from "../../constants";
import {useDispatch, useSelector} from "react-redux";
import {/* fetchArticles, */ fetchArticlesAxios} from "../../actions/articles";

const Home = () => {
    const { list: articleList, requestStatus } = useSelector(state => state.articles)
    const dispatch = useDispatch()

    React.useEffect(() => {
        // dispatch(fetchArticles())
        dispatch(fetchArticlesAxios())
    }, [dispatch])

    const articlesElement = React.useMemo(() => {
        return articleList.map(article => {
            const published = new Date(article.publishedAt).toLocaleDateString()

            return <div key={article.id}>
                <p>published: {published}</p>
                <p><b>{article.title}</b></p>
                <p>{article.summary}</p>
                <br />
            </div>
        })
    }, [articleList])

    return <div>
        <p className="app__title">
            <span>Home page</span>
        </p>

        {articlesElement}

        {requestStatus === ARTICLES_STATUS.STARTED && 'Loading...'}
    </div>
}

export default Home