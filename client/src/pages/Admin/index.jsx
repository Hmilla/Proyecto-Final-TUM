import {Admin, Resource, ListGuesser, CustomRoutes } from 'react-admin'
import { PostList, PostCreate, PostEdit } from '../../components'
import jsonServerProvider from "ra-data-json-server";


export default function AdminPage() {
  const dataProvider = jsonServerProvider('http://localhost:5000');

  return (
   <>
      <Admin basename="/admin" dataProvider={dataProvider}>
         <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} />
      </Admin>
   </>

  )
}  