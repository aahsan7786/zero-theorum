import React from 'react';
import './literature-review.scss';

const initialState = {
    preview: [
        'https://images.pexels.com/photos/844127/pexels-photo-844127.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/3631991/pexels-photo-3631991.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/1099296/pexels-photo-1099296.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    ],
    title: 'A Gated Recurrent Unit Approach to Bitcoin Price P-1',
    subtitle: 'Literature review',
    description: 'In the past, several studies have identified the factors affecting Bitcoin’s price to include market fundamentals (supply and demand), the attractiveness of investors, and global',
    content: '<p>In to am attended desirous raptures declared diverted confined at. Collected instantly remaining up certainly to necessary as. Over walk dull into son boy door went new. At or happiness commanded daughters as. Is handsome an declared at received in extended vicinity subjects. Into miss on he over been late pain an. Only week bore boy what fat case left use. Match round scale now sex style far times. Your me past an much. </p> <p>Behind sooner dining so window excuse he summer. Breakfast met certainty and fulfilled propriety led. Waited get either are wooded little her. Contrasted unreserved as mr particular collecting it everything as indulgence. Seems ask meant merry could put. Age old begin had boy noisy table front whole given. </p> <p>Effects present letters inquiry no an removed or friends. Desire behind latter me though in. Supposing shameless am he engrossed up additions. My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed. </p> <p>Still court no small think death so an wrote. Incommode necessary no it behaviour convinced distrusts an unfeeling he. Could death since do we hoped is in. Exquisite no my attention extensive. The determine conveying moonlight age. Avoid for see marry sorry child. Sitting so totally forbade hundred to. </p>'
};


const LiteratureReview = () => {

    return (
        <section className="section hero inner-page article">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-4">
                        <div className="review-photos">
                            {
                                initialState.preview.map((photo, key) => {
                                    return (
                                        <div className="review-photos-item" key={key}>
                                            <img src={photo} alt={initialState.title} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="col-xl-8 offset-xl-1 col-lg-8">
                        <div className="review-content">
                            <p className="subtitle">{initialState.subtitle}</p>
                            <h1 className="title-1 title-border">{initialState.title}</h1>
                            <div className="review-content-text" dangerouslySetInnerHTML={{ __html: initialState.content }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

};

export default LiteratureReview;
