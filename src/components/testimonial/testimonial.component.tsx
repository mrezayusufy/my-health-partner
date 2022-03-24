const Testimonial = () => {
  return (
    <section>
      <div>
        <p>Empower the daily management of your chronic disease</p>
        <small>
          We provide information about pathology and offer daily activities and
          recipes to reduce risks of cardiovascular events.
        </small>
      </div>
      <div>
        <div>let's find more about you</div>
        <form>
          {/* dropdown */}
          <div>
            <p>i have</p>
            <input type="text" value={'my disease'} />
          </div>
          <div>
            <p>i am</p>
            <input type="text" value={'gender'} />
          </div>
          <div>
            <p>about</p>
            <input type="text" value={'age'} />
          </div>
          <button type="submit">search</button>
        </form>
      </div>
    </section>
  )
}
export default Testimonial
