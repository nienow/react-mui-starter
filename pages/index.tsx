import Layout from '../components/Layout';
import {Card, CardContent} from "@mui/material";
import Counter from "@/components/counter/Counter";

const IndexPage = () => {
  return (<Layout>
    <div>This is the main page2</div>
    <div style={{display: 'flex'}}>
      <Card variant="outlined">
        <CardContent>
          <Counter></Counter>
        </CardContent>
      </Card>
    </div>
  </Layout>);
}

export default IndexPage
