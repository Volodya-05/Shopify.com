import './createAccount.scss'

const Signup = () => {
	return (

		<div className='container'>
			<div className='text'>
				<h1>Create Account</h1>
				<div className='rows'></div>
			</div>


			<div className="firstlast" >
				<div >
					<label >First Name</label>
					<input className="firstname" ></input>
				</div>
				<div className='firstlast_div2'>
					<label className='div2_labl'>Last Name</label>
					<input className="lastname" ></input>
				</div>
			</div>

			<div className='email1'>
				<div className='email_input'>
					<label htmlFor="Email" id='email'>Email</label>
					<input type="Email" className="Email" required></input>
				</div>
				<div className="password_input">
					<label htmlFor="Password" id='password'>Password</label>
					<input type="Password" className="Password" required></input>
				</div>

				<input type="submit" className="sign" value="CREATE"></input>
				<a href='*' className='CrAc'>RETURN TO STORE</a>
			</div>

		</div>


	)
}

export default Signup
