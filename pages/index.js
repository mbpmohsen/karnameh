import {Navbar} from "../components/common";
import {Container} from "../components/ui";
import QuestionPreview from "../components/QuestionPreview";
import {getPosts} from "../services/json-server/posts";
import {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import {addPosts} from "../redux/actions/posts";

const link = {url: '/', title: 'لیست سوالات'};

export default function Home({data}) {
    const posts = useSelector((state) => state.posts)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addPosts(data));
    }, [data])

  return (
      <div className="rtl">
        <Navbar link={link}/>
          <div className="bg-slate-50 h-screen pt-8">
            <Container>
            {posts.map(question => <QuestionPreview data={question} key={question.id}/>)}
            </Container>
          </div>
      </div>

  )
}

export async function getServerSideProps() {
  const {data} = await getPosts();
  return { props: { data } }
}

