import './Tag.css';

const Tag = ({tagName,selectTag,selected}) => {

const tagStyle = {
    HTML:{backgroundColor:"green"},
    CSS:{backgroundColor:"red"},
    JavaScript:{backgroundColor:"yellow"},
    default:{backgroundColor:"gray"},
}

return(
    <button 
    type="button"
    className='tag'
    style={selected ? tagStyle[tagName]:tagStyle.default}
    onClick={() =>selectTag(tagName)}>
        {tagName}
        </button>
);
}

export default Tag;