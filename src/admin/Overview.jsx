import React, { useEffect, useState } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { allBookApi, getAcceptedReservationsApi, getReservedBooksApi } from '../services/allApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faInbox, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './overview.css'; 

function Overview() {
    const [totalBooks, setTotalBooks] = useState(0);
    const [totalIssue, setTotalIssue] = useState(0);
    const [totalRequest, setTotalRequest] = useState(0);

    const fetchData = async () => {
        
        const booksResult = await allBookApi();
        const bookData = booksResult.data;
     
        
        const totalAvailable =bookData.map((item)=>item.availabilty).reduce((a,b)=>a+b)
        setTotalBooks(totalAvailable)

        const issuesResult = await getAcceptedReservationsApi();
        setTotalIssue(issuesResult.data.length);

        const requestsResult = await getReservedBooksApi();
        setTotalRequest(requestsResult.data.length);
    };

    
    
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="overview-container">
            <div className="overview-header">
                <h2>Library Statistics</h2>
                <p>Manage and track your library data with ease</p>
            </div>
            <div className="overview-content">
                <div className="overview-card">
                    <CircularProgressbar
                        value={totalBooks}
                        text={`${totalBooks}`}
                        styles={buildStyles({
                            pathColor: '#4CAF50',
                            textColor: '#4CAF50',
                            trailColor: '#E0E0E0',
                        })}
                    />
                    <div className="overview-info">
                        <FontAwesomeIcon icon={faBook} className="overview-icon" />
                        <p>Total Books</p>
                    </div>
                </div>
                <div className="overview-card">
                    <CircularProgressbar
                        value={totalRequest}
                        text={`${totalRequest}`}
                        styles={buildStyles({
                            pathColor: '#2196F3',
                            textColor: '#2196F3',
                            trailColor: '#E0E0E0',
                        })}
                    />
                    <div className="overview-info">
                        <FontAwesomeIcon icon={faInbox} className="overview-icon" />
                        <p>Requests</p>
                    </div>
                </div>
                <div className="overview-card">
                    <CircularProgressbar
                        value={totalIssue}
                        text={`${totalIssue}`}
                        styles={buildStyles({
                            pathColor: '#FFC107',
                            textColor: '#FFC107',
                            trailColor: '#E0E0E0',
                        })}
                    />
                    <div className="overview-info">
                        <FontAwesomeIcon icon={faCheckCircle} className="overview-icon" />
                        <p>Issued Books</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overview;
