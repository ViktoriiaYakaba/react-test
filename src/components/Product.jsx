import css from './Product.module.css';

const img = 'https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f16919.jpg';

const Product = () => {
  return (
    <article>
          <div className={css.container}>
              <img src={img} alt='cuffie' />
              <h6>Cuffie P9 Max Wireless Argento</h6>
              <hr/>
              <p>0,42$</p>
          </div>
         
    </article>
  )
}

export default Product
