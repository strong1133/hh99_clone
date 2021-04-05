import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const contents = `<li>More</li>
</ul>
<blockquote>
<p>Blockquote</p>
</blockquote>
<p>And <strong>bold</strong>, <em>italics</em>, and even <em>italics and later <strong>bold</strong></em>. Even <del>strikethrough</del>. <a href="https://markdowntohtml.com">A link</a> to somewhere.</p>
<p>And code highlighting:</p>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> foo = <span class="hljs-string">'bar'</span>;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">baz</span><span class="hljs-params">(s)</span> </span>{
   <span class="hljs-keyword">return</span> foo + <span class="hljs-string">':'</span> + s;
}
</code></pre>
<p>Or inline code like <code>var foo = &#39;bar&#39;;</code>.</p>
<p>Or an image of bears</p>
<p><img src="http://placebear.com/200/200" alt="bears"></p>
<p>The end ...</p>

`;
const PostContents = (props) => {
  return (
    <Container>
      <div dangerouslySetInnerHTML={{ __html: contents }}></div>
    </Container>
  );
};

PostContents.defaultProps = {};

const Container = styled.div`
  margin: 3rem auto;
`;
const Contents = styled.div`
  max-width: 768px;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export default PostContents;
