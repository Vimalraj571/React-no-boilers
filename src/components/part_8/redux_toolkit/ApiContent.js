import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContent } from '../../../redux/contentSlice';

const ApiContent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchContent());
    }, [dispatch])
  
    const contents = useSelector((state) => state.content.contents);
    const isLoading = useSelector((state) => state.content.isLoading);
    const error = useSelector((state) => state.content.error);
  
    if (isLoading) {
      return 'loading...'
    }
  
    if (error) {
      return error
    }
  
    return (
      <div className='grid gap-4 grid-cols-2  md:grid-cols-4 lg:grid-cols-8  p-4'>
        {contents.map((content) => (
          <ul key={content.id}>
            <li>{content.title}</li>
          </ul>
        ))}
      </div>
    )
}

export default ApiContent;
