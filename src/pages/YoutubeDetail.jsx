import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

function YoutubeDetail() {
	const { id } = useParams();
	return <Layout title={"YOUTUBE DETAIL"}>유튜브 상세페이지 {id}</Layout>;
}

export default YoutubeDetail;
