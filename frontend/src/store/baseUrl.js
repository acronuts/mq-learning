let baseUrl = 'https://mq-learning.propulsion-learn.ch';

if(process.env.NODE_ENV === 'development'){
    baseUrl = 'http://localhost:8000'
} else {
    baseUrl = 'https://mq-learning.propulsion-learn.ch'
}

export default baseUrl;