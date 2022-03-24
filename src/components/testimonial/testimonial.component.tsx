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
            <label htmlFor="disease">i have</label>
            <input type="text" id="disease" value={'my disease'} />
          </div>
          <div>
            <label htmlFor="gender">i am</label>
            <input type="text" id="gender" value={'gender'} />
          </div>
          <div>
            <label htmlFor="age">about</label>
            <input type="text" id="age" value={'age'} />
          </div>
          <button type="submit">search</button>
        </form>
      </div>
    </section>
  )
}
export default Testimonial
