import React, { Component } from "react";
import { Row, Container, Col } from 'react-bootstrap';

export default class Help extends Component {
    render() {
        return (
            <main>
                <Row>
                    <div class="jumbotron jumbotron-fluid">
                        <div class="container">
                            <Row>
                                <Col>
                                    <h1 class="display-4">Wishcart.</h1>
                                    <p class="lead">Always there for you to manage and</p>
                                    <p>organize for any occasion.</p>
                                    <a class="btn btn-primary btn-sm" href="#" role="button">Go to my list</a>
                                </Col>
                                <Col>
                                    <img src={require('../img/jumbotron-img.jpg')} className="rounded float-right img-responsive" width="80%" height="auto" />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Row>
                <Container>
                    <h2>Help</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nunc leo, faucibus ac sodales sed, elementum et nisl. Pellentesque sit amet maximus justo. Cras rutrum imperdiet nisl, id venenatis diam sodales in. Maecenas sed nisi porta, tempus mauris sed, ornare tortor. Nulla non ultrices risus, mattis sagittis libero. In imperdiet tortor vitae tellus rhoncus commodo. Maecenas at tellus interdum, fermentum arcu sit amet, tempus purus. Mauris vel varius lacus. Vestibulum dapibus, lacus non rutrum posuere, lacus ex suscipit magna, sit amet facilisis erat odio sit amet velit. Nam mauris tortor, pellentesque id nisl sed, placerat convallis enim. Nulla in ante eget nulla eleifend ornare. Nam varius diam sed mollis consequat. Donec lobortis elit et nisi fringilla sollicitudin. Fusce id eros ut lorem tempor aliquam id ac erat. Donec vel ligula dolor. Suspendisse dictum neque vitae est fringilla, nec tincidunt ipsum euismod.</p>
                    <p>Fusce in efficitur est, quis rhoncus lorem. In vulputate enim volutpat enim bibendum suscipit. Curabitur facilisis interdum vestibulum. Vivamus sit amet consequat lorem. Vestibulum suscipit consequat orci, vitae facilisis elit porttitor sit amet. Proin nibh nisi, laoreet eu dui bibendum, ullamcorper laoreet nibh. Curabitur facilisis cursus porttitor. Etiam accumsan leo sapien. Proin finibus imperdiet lectus a laoreet. Etiam luctus orci a magna blandit, vel euismod est congue. Proin id nisl in nisl semper feugiat a vitae erat. Vestibulum vitae dapibus ante.</p>
                    <p>Nulla nibh orci, condimentum quis interdum vitae, imperdiet at orci. Vestibulum vitae nisl risus. Nullam ac porta sem. Pellentesque id vulputate massa. Sed porttitor non elit eu bibendum. Praesent vestibulum aliquam nulla, eget posuere tortor vehicula non. Praesent fermentum velit arcu, non rhoncus lorem rutrum sit amet. Nunc quis elementum urna, sed imperdiet leo. Quisque imperdiet, ligula in rhoncus aliquam, augue nibh eleifend eros, vitae tincidunt turpis erat in magna. Ut id mi nunc. Nulla facilisi. Integer ac ultricies enim, et dignissim elit. Duis venenatis eu leo sed consequat. Nulla congue finibus erat, a vulputate ligula vehicula nec. Aliquam eros urna, mollis et pellentesque ut, scelerisque et velit. Nulla vulputate sit amet velit a lacinia.</p>
                    <p>Proin sit amet augue pellentesque tellus ultrices scelerisque vitae eu metus. Nulla pretium pharetra orci, eu fringilla arcu facilisis eu. Aliquam erat volutpat. Maecenas luctus mauris vitae dui facilisis aliquam. Aliquam nec venenatis tortor. Sed nulla lacus, blandit sit amet neque maximus, interdum tincidunt diam. Vivamus tempor lorem vitae sem lobortis, nec consectetur dolor volutpat. Duis erat arcu, scelerisque at risus ut, fringilla luctus urna. Nunc sodales ipsum tincidunt mollis efficitur. Morbi et massa ut est fermentum imperdiet. Cras mi purus, tristique vitae sodales sed, vestibulum sit amet nibh. Aliquam ultricies, lorem non porttitor imperdiet, neque metus suscipit tellus, sed suscipit elit diam sed mi. Morbi non neque non est sagittis dictum.</p>
                </Container>
            </main>
        );
    }
}