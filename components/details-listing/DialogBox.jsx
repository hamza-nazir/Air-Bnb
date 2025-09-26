import { Dialog,  DialogContent, IconButton,Typography,  Button,Box,} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import GoogleIcon from "@mui/icons-material/Google"
import { signIn } from "next-auth/react";

const DialogBox = ({open,setOpen}) => {
  return (
  <Dialog
      maxWidth="sm"
      fullWidth
      open={open}
      onClose={() => setOpen(false)}
      PaperProps={{
        sx: { borderRadius: 3, p: 1 },
      }}
    >
      {/* Close button */}
      <IconButton
        onClick={() => setOpen(false)}
        aria-label="close"
        sx={{
          position: "absolute",
          right: 12,
          top: 12,
          color: "grey.600",
        }}
      >
        <CloseIcon />
      </IconButton>

      {/* Content */}
      <DialogContent  sx={{ textAlign: "center", py: 5 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Welcome 
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Please sign in to continue using your account
        </Typography>

        <Box mt={3}>
          <Button
            onClick={() => signIn("google")}
            variant="outlined"
            fullWidth
            startIcon={<GoogleIcon />}
            sx={{
              textTransform: "none",
              borderRadius: 2,
              fontWeight: "bold",
              py: 1.2,
              fontSize: "0.95rem",
            }}
          >
            Continue with Google
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default DialogBox