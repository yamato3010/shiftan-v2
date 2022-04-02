import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import BadgeIcon from '@mui/icons-material/Badge';
import KeyIcon from '@mui/icons-material/Key';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const testUser = {
    firstName: "太郎",
    lastName: "山田",
    mail: "hogehoge@gmail.com",
    userID: "taro0000"
}

export default function PartTimeAccountSettings() {

    const [selectedItem, setSelectedItem] = React.useState('')

    const onOpenDialog = (name) => {
        setSelectedItem(name)
    }

    const onCloseDialog = () => {
        setSelectedItem('')
    }

    return (
        <>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => onOpenDialog("name")}>
                                <ListItemIcon>
                                    <BadgeIcon />
                                </ListItemIcon>
                                <ListItemText primary="氏名" secondary={testUser.lastName + " " + testUser.firstName} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => onOpenDialog("email")}>
                                <ListItemIcon>
                                    <EmailIcon />
                                </ListItemIcon>
                                <ListItemText primary="メールアドレス" secondary={testUser.mail} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => onOpenDialog("userID")}>
                                <ListItemIcon>
                                    <PersonIcon />
                                </ListItemIcon>
                                <ListItemText primary="ユーザーID" secondary={testUser.userID} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => onOpenDialog("password")}>
                                <ListItemIcon>
                                    <KeyIcon />
                                </ListItemIcon>
                                <ListItemText primary="パスワード" secondary="パスワード再設定画面に移動します" />
                            </ListItemButton>
                        </ListItem>
                    </List>
            </Box>

            <Dialog open={selectedItem === "name"} onClose={onCloseDialog}>
                <DialogTitle>氏名</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        新しく設定する氏名を入力してください
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="lastName"
                        label="姓"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        id="firstName"
                        label="名"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCloseDialog}>キャンセル</Button>
                    <Button onClick={onCloseDialog}>保存</Button>
                </DialogActions>
            </Dialog>

            <Dialog open={selectedItem === "email"} onClose={onCloseDialog}>
                <DialogTitle>メールアドレス</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        新しく設定するメールアドレスを入力してください
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="メールアドレス"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCloseDialog}>キャンセル</Button>
                    <Button onClick={onCloseDialog}>保存</Button>
                </DialogActions>
            </Dialog>

            <Dialog open={selectedItem === "userID"} onClose={onCloseDialog}>
                <DialogTitle>ユーザーID</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        新しく設定するユーザーIDを入力してください
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="userID"
                        label="ユーザーID"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCloseDialog}>キャンセル</Button>
                    <Button onClick={onCloseDialog}>保存</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}