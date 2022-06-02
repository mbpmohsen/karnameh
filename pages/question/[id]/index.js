import {Navbar} from "../../../components/common";
import {Fragment, useEffect, useState} from "react";
import {Container} from "../../../components/ui";
import {QuestionCard, CommentCard, AnswerForm} from "../../../components/question";
import {getPosts} from "../../../services/json-server/posts";
import {getPost} from "../../../services/json-server/post";
import {getComments} from "../../../services/json-server/comments";
import {useRouter} from "next/router";

/**
 *
 * @param data
 * @param {Number} data.id
 * @param {String} data.title
 * @param {String} data.description
 * @param {String} data.date
 * @param {String} data.time
 * @param {Number} data.comments
 * @param {String} data.authorAvatar
 * @returns {JSX.Element}
 * @constructor
 */
const  Question = ({data}) => {
    const router = useRouter();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        if (data) {
            const {id} = data;
            getComments(id).then(response => {
                const {data} = response;
                setComments(data);
            });

            return () => {
                setComments([])
            };
        }
    }, [data])

    useEffect(() => {
        if (data) {
            data.comments = comments.length ?? data.comments;
        }
    }, [comments])

    return router.isFallback ? (
        <h1>Loading...</h1>
    ) : (
        <Fragment>
            <Navbar link={{title: 'جزییات سوال', url: '/'}}/>
            <div className="bg-slate-50 pt-8">
                <Container>
                    <QuestionCard data={data} commentCount={comments.length}/>
                    <div className="mt-6 mb-4">
                        <h6 className={'font-extrabold text-2xl'}>
                            پاسخ ها
                        </h6>
                    </div>
                    {comments.map(comment => <CommentCard data={comment} key={comment.id}/>)}
                    <div className="mt-6 mb-4">
                        <h6 className={'font-extrabold text-2xl'}>
                            پاسخ خود را ثبت کنید
                        </h6>
                    </div>
                    <AnswerForm postId={data.id}/>
                </Container>
            </div>
        </Fragment>
    )
}

export default Question

export const getStaticPaths = async () => {
    const {data} = await getPosts();

    const paths = data.map((post) => `/question/${post.id}`);

    return {paths, fallback: true}
}

export const getStaticProps = async ({params}) => {
    const {data} = await getPost(params.id);

    return { props: { data } }
}