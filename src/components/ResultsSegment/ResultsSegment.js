import React from "react";
import "./ResultsSegment.css";
import { Segment, Container, Header, Button, Grid, Icon } from 'semantic-ui-react';

const ResultsSegment = (props) => {
    console.log(props.resultData);

    if (props.resultData.length) {
        return(
            <Container style={{margin: 20}}>
                <Segment.Group raised>
                    <Container textAlign='center'><Segment><Header as='h2'>Results</Header></Segment></Container>
                    <Segment.Group raised>
                    {props.resultData.map(story => {
                        return(
                            <Segment key={`${story._id}`}>
                                <Grid stackable>
                                    <Grid.Row width={16}>
                                        <Grid.Column width={13} className="textArea">
                                            <Segment.Group>
                                                <Segment>
                                                    <h3><a href={`${story.web_url}`} target="blank">{`${story.headline.main}`}</a></h3>
                                                </Segment>
                                                <Segment>
                                                    <h4>{`${story.snippet}`}</h4>
                                                </Segment>
                                            </Segment.Group>
                                        </Grid.Column>
                                        <Grid.Column width={3}> 
                                            <Button data={`${story}`} type="submit" className="SaveButton" onClick={() => props.handleSave(story)} color='green'><Icon name='save' /> Save Article</Button>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Segment>
                        )
                    })}
                    </Segment.Group>
                </Segment.Group>
            </Container>
        )
    } else {
        return <div></div>;
    }
}

export default ResultsSegment;


// <Grid columns='equal'>
// <Grid.Column>
//   <Segment>1</Segment>
// </Grid.Column>
// <Grid.Column width={8}>
//   <Segment>2</Segment>
// </Grid.Column>
// <Grid.Column>
//   <Segment>3</Segment>
// </Grid.Column>
// </Grid>


// (2) [{…}, {…}]
// 0
// :
// blog
// :
// {}
// byline
// :
// {original: "By JOHN WILLIAMS", person: Array(1), organization: null}
// document_type
// :
// "article"
// headline
// :
// {main: "Tell Us 5 Things About Your Book: A Missionary’s Daughter in Haiti", kicker: "Q. & A.", content_kicker: "Q. & A.", print_headline: "A Missionary’s Daughter in Haiti", name: null, …}
// keywords
// :
// (4) [{…}, {…}, {…}, {…}]
// multimedia
// :
// (68) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// new_desk
// :
// "Culture"
// print_page
// :
// "6"
// pub_date
// :
// "2018-03-18T15:00:01+0000"
// score
// :
// 5.3769546
// snippet
// :
// "In “The Gospel of Trees,” Apricot Irving recounts the formative years she spent in Haiti while her father was devoted to reforestation efforts there."
// source
// :
// "The New York Times"
// type_of_material
// :
// "Question"
// uri
// :
// "nyt://article/4f66f329-065f-5a08-9e8f-93e3be29046a"
// web_url
// :
// "https://www.nytimes.com/2018/03/18/books/gospel-of-trees-apricot-irving-interview.html"
// word_count
// :
// 982
// _id
// :
// "5aae7ef747de81a901212220"
// __proto__
// :
// Object
