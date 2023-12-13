import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import logo from './assets/ashoka.svg';
import logo1 from './assets/tarazu.svg';


function Signin(){
    return <div style={{
         
        paddingRight: 100
    }}>

        <div style={{display: 'flex',justifyContent: 'left',marginLeft: 20, marginTop: 20}}>
                   
                    <img src={logo1} width={100}></img>
         </div>
         
        <div style={{display: 'flex', justifyContent: 'space-between'}}>

            <div style={{
                marginLeft: 250,
                marginTop: 110,
            }}>
            <img src={logo} width={400}></img>
            </div>

        <Card variant="outlined" style={{
                width: 400,
                marginRight: 80,
                marginTop: 109,
                marginLeft: 1,
                marginBottom: 166,     
                
            }} >{
                
            <div style={{
                borderRadius: 10,
                border: '2px solid',
                padding: 20,
            }}>
                <div style={{}}>
                <br />
                <div style={{display: 'flex',justifyContent: 'left', marginBottom: 0}}>
                    <Typography variant={'h5'} style={{ color: 'Blue' }} fontSize={30}>Login into your Account</Typography>
                </div>
                <br/>
                
                <TextField
                    required={true}
                    fullWidth={true} 
                    size='small'
                    id={"Username"} 
                    label="Enter username" 
                    variant="filled" 
                />
                <br/>
                <br/>
                <div style={{display: 'flex',justifyContent: 'left', marginBottom: 0}}>
                    <Typography variant={'h5'} style={{ color: 'Black' }} fontSize={16}>Password</Typography>
                </div>
                <TextField
                    required={true}
                    fullWidth={true} 
                    id={"password"} 
                    size='small'
                    label="Enter Password" 
                    type='password' 
                    variant="filled" 
                />
                <br/>
                <br/>
                <div style={{display: 'flex',justifyContent: 'left', marginBottom: 0}}>
                    <Typography variant={'h5'} style={{ color: 'Blue' }} fontSize={16}>Already have an account?Log in</Typography>
                </div>
                </div>
                <div style={{
                    display: 'flex',
                    padding: 8
                }}>
                    <Button 
                        variant="contained"
                        fullWidth={true}
                        onClick={() => {
                                
                           
                        }}
                    >Signup</Button>
                </div>
            </div>
                }
        </Card> 
        </div>
    </div>
   
}
export default Signin;