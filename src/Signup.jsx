import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import logo from './assets/ashoka.svg';
import logo1 from './assets/tarazu.svg';

function Signup(){
    return <div style={{
        paddingTop: 0,
        paddingRight: 100,
    }}>

        <div style={{display: 'flex',justifyContent: 'left',marginLeft: 20,marginTop:20}}>
                    
                    <img src={logo1} width={100}></img>
         </div>
         
        <div style={{display: 'flex', justifyContent: 'space-between'}}>

            <div style={{
                paddingLeft: 200,
                paddingTop: 150,
            }}>
            <img src={logo} width={480}></img>
            </div>

        <Card variant="outlined" style={{
                
            }} >{
                
            <div style={{
                border: '2px solid',
                borderRadius: '10px',
                width: 400,
                padding: 10,
                marginBottom: 5
            }}>
                <div style={{}}>
                <br />
                <div style={{display: 'flex',justifyContent: 'left', marginBottom: 0}}>
                    <Typography variant={'h5'} style={{ color: 'Blue' }} fontSize={30}>Create new Account</Typography>
                </div>
                <br/>
                <div style={{display: 'flex',justifyContent: 'left', marginBottom: 0}}>
                    <Typography variant={'h5'} style={{ color: 'black' }} fontSize={16}>Full Name</Typography>
                </div>
                <TextField
                    required={true}
                    fullWidth={true} 
                    size='small'
                    id={"Name"} 
                    label="Enter Name" 
                    variant="filled" 
                />
                <br/>
                <br/>
                <div style={{display: 'flex',justifyContent: 'left', marginBottom: 0}}>
                    <Typography variant={'h5'} style={{ color: 'Black' }} fontSize={16}>Email</Typography>
                </div>
                <TextField
                    required={true}
                    fullWidth={true} 
                    size='small'
                    id={"Email"} 
                    label="Enter Email " 
                    variant="filled" 
                />
                <br/>
                <br/>
                <div style={{display: 'flex',justifyContent: 'left', marginBottom: 0}}>
                    <Typography variant={'h5'} style={{ color: 'Black' }} fontSize={16}>Mobile Number</Typography>
                </div>
                <TextField
                    required={true}
                    fullWidth={true} 
                    size='small'
                    id={"PhoneNumber"} 
                    label="Enter PhoneNumber" 
                    variant="filled" 
                />
                <br/>
                <br/>
                <div style={{display: 'flex',justifyContent: 'left', marginBottom: 0}}>
                    <Typography variant={'h5'} style={{ color: 'Black' }} fontSize={16}>Username</Typography>
                </div>
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
                    <Typography variant={'h5'} style={{ color: 'Black' }} fontSize={16}>Confirm Password</Typography>
                </div>
                <TextField
                    required={true}
                    fullWidth={true} 
                    size='small'
                    id={"password"} 
                    label="Re-enter Password" 
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

export default Signup;