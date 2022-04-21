import classes from './Search.module.css';
import search from '../../images/search.svg'

const Search = () => {
    return <form>
        <input className={`${'form-control'} ${classes['search-box']}`} type='search' placeholder='Search'/>
        <button type='submit'></button>
    </form>
}

export default Search;