import React, { useCallback } from 'react';
import Stack from '@mui/system/Stack';
import Grid from '@mui/system/Unstable_Grid';
import { Button } from '../buttons';
import { styled } from '../theme';
import { TextInput, Textarea } from './inputs';

const Form = styled('form')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
}));

export interface ContactFormProps {
    className?: string;
    url: string;
    zIndex?: number;
    onSubmit: () => void;
    onError: (err: string) => void;
}

export function ContactForm({
    className,
    url,
    zIndex,
    onSubmit,
    onError,
}: ContactFormProps) {
    const [loading, setLoading] = React.useState(false);
    const handleSubmit = useCallback((event: any) => {
        event.preventDefault();

        const {
            target: [
                { value: firstName },
                { value: lastName },
                { value: email },
                { value: phone },
                { value: text },
            ],
        } = event;

        setLoading(true);
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: `${firstName} ${lastName}`,
                email,
                phone,
                text,
            }),
        })
            .then((res) => {
                if (res.status === 200) {
                    onSubmit();
                }

                if (res.status === 400) {
                    onError('Please fill out all fields.');
                } else if (res.status === 409) {
                    onError('You have already submitted a message.');
                } else {
                    onError('Oops! Something went wrong.\nPlease try again.');
                }
            })
            .catch(() =>
                onError('Oops! Something went wrong.\nPlease try again.')
            )
            .finally(() => setLoading(false));
    }, []);

    return (
        <Form
            id="contact-form"
            sx={{ zIndex, position: zIndex ? 'relative' : undefined }}
            className={className}
            onSubmit={handleSubmit}
        >
            <Grid
                container
                spacing={3}
                alignItems={'center'}
                justifyContent={'center'}
                maxWidth={900}
            >
                <Grid xs={12} sm={6}>
                    <TextInput
                        id="firstName-input"
                        name="firstName"
                        placeholder="First name*"
                        required={true}
                    />
                </Grid>
                <Grid xs={12} sm={6}>
                    <TextInput
                        id="lastName-input"
                        name="lastName"
                        placeholder="Last name*"
                        required={true}
                    />
                </Grid>
                <Grid xs={12} sm={6}>
                    <TextInput
                        id="email-input"
                        name="email"
                        placeholder="Email*"
                        required={true}
                    />
                </Grid>
                <Grid xs={12} sm={6}>
                    <TextInput
                        id="phoneNumber-input"
                        name="phoneNumber"
                        placeholder="Phone number*"
                        required={true}
                    />
                </Grid>
                <Grid xs={12}>
                    <Textarea
                        id="message-input"
                        name="message"
                        placeholder="Message*"
                        maxLength={600}
                        required={true}
                    />
                </Grid>
                <Grid xs={12}>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={0}
                    >
                        <Button
                            id="submit-button"
                            type="submit"
                            disabled={loading}
                        >
                            Submit
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </Form>
    );
}
