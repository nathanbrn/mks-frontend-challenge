import { Product } from "@/types/Product";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from "@mui/material";

interface DialogProps {
    openAlert: boolean;
    hideAlert: () => void;
    productsCart: Product[] | null;
    total: number;
}

export function DialogComponent({openAlert, hideAlert, productsCart, total}: DialogProps) {
    return (
        <Dialog
            open={openAlert}
            keepMounted
            onClose={hideAlert}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>Compra Finalizada</DialogTitle>
            <DialogContent>
                <br />
                <DialogContentText id="alert-dialog-slide-description">
                    Obrigado por comprar!
                </DialogContentText>
                <br />
                <DialogContentText>
                    Sua compra deu um total de: R${total.toLocaleString('BR')}
                </DialogContentText>
                <br />
                <DialogContentText>
                    Os itens comprados foram:
                </DialogContentText>
                <ul>
                    {productsCart?.map(({ name, id }: Product) => (
                        <li style={{ fontSize: 14, marginLeft: 24, listStyle: 'initial' }} key={id}>{name}</li>
                    ))}
                </ul>
            </DialogContent>
            <DialogActions>
                <Button onClick={hideAlert}>Fechar</Button>
            </DialogActions>
        </Dialog>
    );
}