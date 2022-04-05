import React, { useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({ articles }) {

    // Declaring sorting by descending order
    const sortByUpvotesDesc = (a,b) => b.upvotes - a.upvotes
    const sortByDateDesc = (a, b) => b.date.localeCompare(a.date);
    
    // Declaring articles order state to keep truck and by default they are sorted by Upvotes
    const [articlesOrder, setArticlesOrder] = useState('byUpvotesDesc')
    
    // Declaring most upvoted and most recent button click Sorting filters by descending order
    const onMostUpvotedClick = () => {
      setArticlesOrder('byUpvotesDesc')
    }
  
    const onMostRecentClick = () => {
      setArticlesOrder('byDatesDesc')
    }

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={onMostUpvotedClick}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={onMostRecentClick}>Most Recent</button>
            </div>
            <Articles articles={articles.sort(articlesOrder === 'byUpvotesDesc' ? sortByUpvotesDesc : sortByDateDesc)} />
        </div>
    );

}

export default App;
